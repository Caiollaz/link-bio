import { chromium } from 'playwright-core';

const url = process.env.URL ?? 'http://localhost:4321';
const navegador = await chromium.launch({ executablePath: process.env.CHROME ?? '/usr/bin/google-chrome' });
const pagina = await navegador.newPage({ viewport: { width: 1200, height: 630 }, colorScheme: 'dark', reducedMotion: 'reduce' });
await pagina.goto(url, { waitUntil: 'networkidle' });
await pagina.evaluate(() => document.fonts.ready);
await pagina.screenshot({ path: 'public/og.png' });
await navegador.close();
console.log('public/og.png gerado a partir de', url);
