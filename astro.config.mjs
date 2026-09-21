import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isPreview = process.env.BUILD_TARGET === 'preview';

export default defineConfig({
  site: isPreview
    ? 'https://THEJean-Kevin.github.io'
    : 'https://www.lebusdetourne.fr',
  base: isPreview ? '/le-bus-detourne' : '/',
  integrations: [sitemap()],
});