export default {
  target: 'server',

  server: {
    host: '0.0.0.0',
    port: 3000
  },

  head: {
    title: 'testproject',
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

  css: [
    '~/assets/CSS/basic.css'

  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [ 
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  build: {
    
  },

  aixos: {
    proxy: true
  },

  proxy: {
    '/api/': { 
      target: 'https://openapi.naver.com/v1/search/movie.json',
      pathRewrite: {'^/api/':''},   
    },

    '/api2/': {
      target: 'https://www.googleapis.com/youtube/v3/videos',
      pathRewrite: {'^/api2/':''},
    },
  },
}