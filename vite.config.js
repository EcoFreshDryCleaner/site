import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Sitemap from 'vite-plugin-sitemap'

// Import services data to generate routes
import { servicesData } from './src/data/servicesData.js'

// Generate dynamic routes from services data
const dynamicRoutes = [
  '/',
  '/privacy-policy',
  '/thank-you',
  ...servicesData.map((service) => `/service/${service.slug}`)
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueDevTools(),
    Sitemap({
      hostname: 'https://ecofreshdrycleaner.com',
      dynamicRoutes: dynamicRoutes
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onFinished() {
      console.log('SSG build completed!')
    },
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
})