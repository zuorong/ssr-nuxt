const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      {
        innerHTML: '(function(win){tid=null;function refreshRem(){var deviceWidth=document.documentElement.clientWidth;if(deviceWidth>750){deviceWidth=540}document.documentElement.style.fontSize=deviceWidth/7.5+"px"}refreshRem();win.addEventListener("resize",function(){clearTimeout(tid);tid=setTimeout(refreshRem,300)},false);win.addEventListener("pageshow",function(e){if(e.persisted){clearTimeout(tid);tid=setTimeout(refreshRem,300)}},false)})(window);',
        type: 'text/javascript',
        body: false
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },
  env: {
    baseUrl: require('./config/url').base,
    nodeEnv: process.env.NODE_ENV
  },
  /*
  ** Customize the progress-bar color
  */
  /**
   * loading: { color: 'red' },
   */
  /** 自定义加载组件 */
  // loading: '~/components/loading.vue',
  loading: {
    color: '#40BB90'
  },
  /*
  ** Global CSS
  */
  css: [
    // 'ant-design-vue/dist/antd.css',
    // 'ant-design-vue/lib/alert/style/css',
    'ant-design-vue/lib/message/style/css',
    'ant-design-vue/lib/carousel/style/css',
    'ant-design-vue/lib/date-picker/style/css',
    'ant-design-vue/lib/locale-provider/style/css',
    'assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: require('./config/proxyApi'),
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // config.performance = {
      //   hints: false
      // }
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, "./icons.js") // 按需加载图标库
    },
    plugins: [
      new HardSourceWebpackPlugin(), // 提高打包速度
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/) // 引入中文包，删除多余的其他语言
    ],
    optimization: {
      splitChunks: {
        minSize: 10000, // 最小 10000 / 1024 (k)
        maxSize: 250000 // 最大 250000 / 1024 (k)
      }
    }
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  render: {
    // compressor: {
    //   level: 9
    // }
    compressor: false
  }
}
