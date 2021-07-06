import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/',
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.ts',
        index: 'index.html',
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        format: 'esm',
      },
    },
  },
  plugins: [svelte()],
})
