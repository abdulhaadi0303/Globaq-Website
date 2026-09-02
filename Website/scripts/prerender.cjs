/**
 * Static prerender for cPanel deployment.
 * Runs after `vite build`. Serves the built app locally, visits every
 * route with a headless browser, and writes the fully-rendered HTML to
 * dist/<route>/index.html so each URL is a real static file — no JS
 * required for crawlers or first paint.
 *
 * Usage: npm run build   (wired up in package.json to run this after vite build)
 */
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer');
const ROUTES = require('./routes.cjs');

const PORT = 4173;
const DIST_DIR = path.join(__dirname, '..', 'dist');
const CHROME_PATH = process.env.CHROME_PATH || undefined;

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

async function prerender() {
  console.log('Starting local static server for prerendering...');
  const server = spawn('npx', ['serve', '-s', 'dist', '-l', String(PORT)], {
    cwd: path.join(__dirname, '..'),
    stdio: 'ignore',
  });
  await waitForServer(`http://localhost:${PORT}/`);

  const launchOpts = { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] };
  if (CHROME_PATH) launchOpts.executablePath = CHROME_PATH;
  const browser = await puppeteer.launch(launchOpts);

  // IMPORTANT: capture everything into memory first. dist/index.html also
  // serves as the SPA fallback file while `serve` is running — overwriting
  // it mid-crawl would leak one route's rendered content into whichever
  // routes are captured afterward. Only write to disk once every route has
  // been visited against the original, untouched build output.
  const captured = [];
  let failed = 0;
  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route.path}`;
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      const html = await page.content();
      captured.push({ route: route.path, html });
      console.log(`✓ ${route.path}`);
    } catch (err) {
      console.error(`✗ FAILED: ${route.path} — ${err.message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.kill();

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