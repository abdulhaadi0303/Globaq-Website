/**
 * Static prerender — works both locally (Mac, using your installed
 * Chrome) and on Vercel's build container (using @sparticuz/chromium,
 * a Chromium build made for serverless/CI Linux environments where
 * Puppeteer's own downloaded Chrome is missing system libraries).
 */
const path = require('path');
const fs = require('fs');
const os = require('os');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer');
const ROUTES = require('./routes.cjs');

const PORT = 4173;
const DIST_DIR = path.join(__dirname, '..', 'dist');
const IS_VERCEL = !!process.env.VERCEL;

async function waitForServer(url, attempts = 20) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status < 500) return true;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server did not start at ${url}`);
}

async function getLaunchOptions() {
  if (IS_VERCEL) {
    const chromium = require('@sparticuz/chromium');
    return {
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    };
  }
  const opts = { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] };
  if (process.env.CHROME_PATH) {
    opts.executablePath = process.env.CHROME_PATH;
    return opts;
  }

  // Prefer Puppeteer's own browser when installed; otherwise use local Chrome.
  const candidates = [];
  try {
    candidates.push(puppeteer.executablePath());
  } catch {
    // Puppeteer may throw when its requested browser version is not cached.
  }
  if (process.platform === 'darwin') {
    candidates.push(
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      path.join(os.homedir(), 'Applications/Google Chrome.app/Contents/MacOS/Google Chrome'),
    );
  }
  opts.executablePath = candidates.find((candidate) => {
    try {
      fs.accessSync(candidate, fs.constants.X_OK);
      return true;
    } catch {
      return false;
    }
  });
  if (!opts.executablePath) {
    throw new Error(
      'No Chrome browser found. Install Google Chrome on macOS, run ' +
      '"npx puppeteer browsers install chrome", or set CHROME_PATH to your browser executable.',
    );
  }
  return opts;
}

async function prerender() {
  console.log(`Starting local static server for prerendering (environment: ${IS_VERCEL ? 'Vercel' : 'local'})...`);
  const launchOpts = await getLaunchOptions();
  console.log(`Prerender browser: ${launchOpts.executablePath}`);
  const server = spawn(process.execPath, [path.join(__dirname, '..', 'node_modules', 'serve', 'build', 'main.js'), '-s', 'dist', '-l', String(PORT)], {
    cwd: path.join(__dirname, '..'),
    stdio: 'ignore',
  });
  let browser;
  const captured = [];
  let failed = 0;
  try {
    await waitForServer(`http://localhost:${PORT}/`);
    browser = await puppeteer.launch(launchOpts);
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const url = `http://localhost:${PORT}${route.path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        let html = await page.content();
        // Some assets (e.g. images referenced via `new URL(path, import.meta.url)`)
        // get baked in as absolute URLs pointing at the local prerender server.
        // Strip that so the shipped HTML uses relative/production-correct URLs.
        html = html.split(`http://localhost:${PORT}`).join('');
        captured.push({ route: route.path, html });
        console.log(`✓ ${route.path}`);
      } catch (err) {
        console.error(`✗ FAILED: ${route.path} — ${err.message}`);
        failed++;
      } finally {
        await page.close();
      }
    }

  } finally {
    try {
      if (browser) await browser.close();
    } finally {
      server.kill();
    }
  }

  for (const { route, html } of captured) {
    const outDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route.replace(/^\//, ''));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
  }

  console.log(`\nPrerendering complete: ${captured.length} succeeded, ${failed} failed.`);
  if (failed > 0) process.exitCode = 1;
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
