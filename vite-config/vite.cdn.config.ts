import { defineConfig } from 'vite';
import path from 'node:path';
import { basePlugins } from './vite.base.config.js';

export default defineConfig({
  plugins: basePlugins,
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'dist/cdn',
    lib: {
      entry: path.resolve(__dirname, '../src/umd-init.ts'),
      name: 'namingToolWidget',
      fileName: 'namingToolWidget',
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});