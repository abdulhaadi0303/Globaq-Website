const fs = require('fs');
const path = require('path');
const ROUTES = require('./routes.cjs');

const SITE_URL = 'https://globaqksa.com';
const DIST_DIR = path.join(__dirname, '..', 'dist');

const today = new Date().toISOString().split('T')[0];

const urls = ROUTES.filter((r) => !r.noindex)
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority ?? 0.5}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.mkdirSync(DIST_DIR, { recursive: true });
fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${ROUTES.filter((r) => !r.noindex).length} URLs.`);