import type { APIRoute } from 'astro';
import { perfil, seo } from '../data/perfil';

export const GET: APIRoute = () => {
  const manifesto = {
    name: perfil.nome,
    short_name: perfil.primeiroNome,
    description: seo.descricao,
    lang: seo.idioma,
    start_url: '/',
    display: 'browser',
    background_color: seo.corEscura,
    theme_color: seo.corEscura,
    icons: [
      { src: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  };
  return new Response(JSON.stringify(manifesto), { headers: { 'Content-Type': 'application/manifest+json' } });
};
