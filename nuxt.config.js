export default {
  target: 'static',

  head: {
    title: 'cabbagekobe.info',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'cabbagekobe.infoです。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'cabbagekobe.info' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://cabbagekobe.info' },
      { hid: 'og:title', property: 'og:title', content: 'cabbagekobe.info' },
      { hid: 'og:description', property: 'og:description', content: 'cabbagekobe.infoです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://cabbagekobe.info/ogp.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://cabbagekobe.info' },
      { name: 'twitter:title', content: 'cabbagekobe.info'}
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
    { src: '@/assets/css/main.scss', lang: 'scss' },
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
  ],

  styleResources: {
    scss: [
      '@/assets/css/_typo.scss',
      '@/assets/css/_variable.scss',
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  axios: {},

  content: {},

  build: {
  },

  googleAnalytics: {
    id: 'UA-28643533-1'
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'UA-28643533-1'
    }
  }
}
