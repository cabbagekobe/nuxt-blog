export default {
  target: 'static',

  head: {
    title: 'cabbagekobe.info',
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
    ],
    script: [
      {
        hid: 'twitter',
        type: 'text/javascript',
        src: '//platform.twitter.com/widgets.js',
        async: true,
        defer: true,
        body: true
      }
    ]
  },

  css: [
    '@/assets/css/main.scss',
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  axios: {},

  content: {},

  build: {
  }
}
