export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/CSS/basic.css'

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [ 
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  aixos: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'https://openapi.naver.com/v1/search/movie.json',
    pathRewrite: {'^/api/':''} 
    // '/api': 'https://openapi.naver.com/v1/search/movie.json?query=s%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1',
    
    },}

  // module.exports : {
  //   devServer : {
  //         proxy: {
  //           'https://openapi.naver.com/v1/search/movie.json?query=%EC%82%AC%EB%9E%91%0D%0A&display=10&start=1&genre=18s' : {
  //             target: 'http://127.0.0.1:12010'
  //           }
  //         }
  //       }
  // }
}
