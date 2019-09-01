import NuxtConfiguration from '@nuxt/config'

const config = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '17th Young Webmaster Camp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Young Webmaster Camp ครั้งที่ 17 “Social Change, Arrange The World” ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุด' },

      { name: 'og:url', content: 'https://ywc17.ywc.in.th' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: '17th Young Webmaster Camp' },
      { name: 'og:description', content: 'Young Webmaster Camp ครั้งที่ 17 “Social Change, Arrange The World” ค่ายสร้างเว็บไซต์ระดับอุดมศึกษาที่ใหญ่ที่สุด' },
      { name: 'og:image', content: 'https://ywc17.ywc.in.th/images/ogImage.png' },
      { name: 'article:author', content: 'https://www.facebook.com/ywcth' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:src', content: 'https://ywc17.ywc.in.th/images/ogImage.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700|Sarabun:300,400,700&display=swap&subset=thai' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/global.css',
    '@/assets/css/webfont.css',
    '@/assets/css/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-agile', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    /*
    ['@nuxtjs/google-analytics', {
      id: 'UA-42284958-1'
    }]
    */
    ['@nuxtjs/google-gtag', {
      id: 'UA-42284958-1'
    }],
    ['nuxt-facebook-pixel-module', {
      track: 'PageView',
      pixelId: '852229261558709',
      disabled: false
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    // Fix ES6 for IE11
    transpile: [
      /(.+)(vue\-agile\/src\/)(.+)(\.js)$/, // Transpile Unix paths
      /(.+)(vue\-agile\\src\\)(.+)(\.js)$/ // Transpile Windows paths
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config: NuxtConfiguration, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}

export default config
