import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), vue()],

  markdown: {
    shikiConfig: {
      theme: 'material-theme',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
