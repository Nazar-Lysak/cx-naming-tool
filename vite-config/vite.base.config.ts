import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

export const basePlugins = [react()];

export const baseResolve = {
  alias: {
    '@': path.resolve(__dirname, '../src'),
  },
};

// Спільні налаштування для SPA білдів (standalone/demo)
export const getSpaConfig = (outDir: string, basePath = '/') => defineConfig({
  base: basePath,
  plugins: basePlugins,
  resolve: baseResolve,
  build: {
    outDir,
    rollupOptions: {
      input: path.resolve(__dirname, '../index.html'),
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: 'index.js',
        assetFileNames: '[name][extname]'
      }
    },
  },
});
