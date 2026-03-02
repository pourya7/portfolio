import { defineConfig } from 'astro/config';
import qwikdev from "@qwikdev/astro";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://pourya7.com',
  trailingSlash: 'never',
  integrations: [qwikdev(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});