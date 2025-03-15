// @ts-check
import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
})
