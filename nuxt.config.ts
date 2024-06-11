// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/motion/nuxt',
    '@nuxtjs/supabase',
    'nuxt-icon',
    'nuxt-chatgpt',
  ], 
  supabase: {
    redirect: false
  },
  chatgpt: {
    apiKey: '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',
  },
})
