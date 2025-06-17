// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    optimizeDeps: {
      exclude: ['react-compiler-runtime']
    }
  },
  site: 'http://localhost:4321', // Development URL
  base: '/',
});