// @ts-check
import { defineConfig } from 'astro/config';

import prettierResponse from '@altano/astro-prettier-response';

export default defineConfig({
  integrations: [prettierResponse({
    disableMinifiers: true,
    formatXml: true,
  })],
  vite: {
    build: {
      minify: false,
      cssMinify: false,
    },
  },
  compressHTML: false,
});