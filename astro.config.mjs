import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://codebycaio.com.br',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'always' },
  scopedStyleStrategy: 'where',
  devToolbar: { enabled: false },
});
