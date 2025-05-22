import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.aastransportes.com.br',
  integrations: [sitemap()],
});