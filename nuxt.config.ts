import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    'radix-vue/nuxt',
    '@vueuse/nuxt',
    'shadcn-nuxt'
  ],
})