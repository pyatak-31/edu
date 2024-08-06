import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/edu/',
  plugins: [
    vue(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/shared/assets/scss/global.scss";',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/shared/assets/images', import.meta.url)),
      'icons': fileURLToPath(new URL('./src/shared/assets/icons', import.meta.url)),
    }
  }
})
