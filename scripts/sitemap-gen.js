import * as fs from 'fs';
import * as path from 'path';

const baseUrl = 'https://entropyentertainment.net'; // Update this

const routes = [
    {path: '/', lastmod: '2025-06-21', changefreq: 'monthly', priority: 1.0},
    {path: '/projects', lastmod: '2025-06-18', changefreq: 'monthly', priority: 0.8},
    {path: '/about', lastmod: '2025-06-20', changefrew: 'yearly', priority: 0.6},
    {path: '/posts', lastmod: '2025-06-20', changefreq: 'monthly', priority: 0.6},
];


const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
        ({path, lastmod, changefreq, priority}) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
  </url>`
    )
    .join('')}
</urlset>`;


fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);

console.log('✅ Sitemap generated!');