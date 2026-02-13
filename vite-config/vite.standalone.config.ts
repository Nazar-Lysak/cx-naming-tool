import { defineConfig } from 'vite';
import path from 'node:path';
import { basePlugins } from './vite.base.config.js';

export default defineConfig({
  plugins: basePlugins,
  build: {
    outDir: 'dist/standalone',
    rollupOptions: {
      input: path.resolve(__dirname, '../index.html'),
    },
  },
});