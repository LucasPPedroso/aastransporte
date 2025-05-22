// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.aastransportes.com.br",
  integrations: [sitemap({
    filter: (page) => !page.includes('/blog/'), // Exclude blog pages since they don't exist
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  })],
  output: 'static', // Ensure static output
  build: {
    // Static build configuration
    format: 'directory',
    assets: '_astro'
  }
});
