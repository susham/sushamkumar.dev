import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sushamkumar.dev',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
