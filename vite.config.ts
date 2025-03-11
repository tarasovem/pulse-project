import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
       plugins: [tailwind(), autoprefixer()],
    }
  },
  plugins: [VueRouter(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],
      imports : ['vue', VueRouterAutoImports],
      dts: true,
      viteOptimizeDeps: true,
    }),
    Components({
      
    }),
    vue({
    template: {
      compilerOptions: {
        isCustomElement: (element) => element.startsWith("iconify-icon"),
      }
  }}), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
