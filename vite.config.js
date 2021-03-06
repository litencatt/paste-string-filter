import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dist/',
  build: {
    rollupOptions: {
      input: {
        main: 'main.html',
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
  plugins: [svelte({
      preprocess: sveltePreprocess()
    })],
})
