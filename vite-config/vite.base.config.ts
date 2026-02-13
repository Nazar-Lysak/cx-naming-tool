import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

export const basePlugins = [react()];

// Спільні налаштування для SPA білдів (standalone/demo)
export const getSpaConfig = (outDir: string) => defineConfig({
  plugins: basePlugins,
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
