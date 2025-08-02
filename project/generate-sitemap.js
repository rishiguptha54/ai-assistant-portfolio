// generate-sitemap.js (ESM version)
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const baseUrl = 'https://rishi45.dev';

const sitemap = new SitemapStream({ hostname: baseUrl });
const writeStream = createWriteStream('./public/sitemap.xml');

(async () => {
  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
  sitemap.end();
  await streamToPromise(sitemap).then(sm => writeStream.end(sm));
  console.log('✅ sitemap.xml created with homepage');
})();
