// @ts-check
import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react(), vue()],

  vite: {
    plugins: [tailwindcss()]
  }
})
