/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      root: 'src',
      // para hacer un deploy, configura propiedad base con el nombre/url de tu repo
      // https://vitejs.dev/guide/static-deploy.html#github-pages
      // ejemplo:
      base: '/DEV001-social-network/',
      build: {
        minify: false,
        rollupOptions: {
          output: {
            dir: './dist',
          },
        },
        // sourcemap: true,
      },
    };
  }
  return {};
});
