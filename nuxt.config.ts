import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/global.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: { highlight: { theme: 'github-dark' } },
  colorMode: { classSuffix: '' }
})
