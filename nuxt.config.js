export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'otdelkadr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~plugins/vuelidate',
    '~plugins/customValidators.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Türkmençe',
          code: 'tk',
          iso: 'tk-TM',
          file: 'tk.js'
        },
        {
          name: 'Русский',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru.js'
        },
      ],
      langDir: 'lang/',
      lazy: true,
      defaultLocale: 'tk',
    }],
    ['nuxt-vuex-localstorage', {
      mode: 'debug',
      localStorage: ['cart', 'localStorage']
    }]
  ],
  bootstrapVue: {
    icons: true
  },
  axios: {
    baseURL:process.env.BASE_URL || 'http://217.174.233.210:8000',
    proxyHeaders: false,
    credentials: false
    // debug: true
  },
  server: {
    port: 8888, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
