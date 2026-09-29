// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  session: false,

  adapter: cloudflare({
    imageService: 'passthrough',
  }),

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});