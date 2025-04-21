// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },

  modules: ['@vite-pwa/nuxt', '@nuxt/ui'],

  css: ['~/assets/main.css'],

  pwa: {
    registerType: 'prompt',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'nuxt-pwa',
      short_name: 'Nuxt PWA Menu',
      description: 'Scaninfo menu testing pwa',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },

    registerWebManifestInRouteRules: true,

    client: {
      periodicSyncForUpdates: 3600,
      installPrompt: true,
    },
  },
  ui: {
    colorMode: false
  },
  compatibilityDate: '2025-04-21',
})