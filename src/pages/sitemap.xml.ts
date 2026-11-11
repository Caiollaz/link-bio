import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const inicio = new URL('/', site).href;
  const hoje = new Date().toISOString().slice(0, 10);
  const corpo = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <url><loc>${inicio}</loc><lastmod>${hoje}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>`,
    '</urlset>',
    '',
  ].join('\n');
  return new Response(corpo, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
