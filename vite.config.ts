import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    root: 'htdocs',
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'htdocs/index.html'),
          about: path.resolve(__dirname, 'htdocs/about.html'),
          resorts: path.resolve(__dirname, 'htdocs/resorts.html'),
          packages: path.resolve(__dirname, 'htdocs/packages.html'),
          gallery: path.resolve(__dirname, 'htdocs/gallery.html'),
          contact: path.resolve(__dirname, 'htdocs/contact.html'),
        },
      },
    },
  };
});
