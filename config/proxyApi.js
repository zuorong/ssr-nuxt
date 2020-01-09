const baseUrl = require('./url').base
console.log('-------')
console.log('proxyApi:' + baseUrl)
console.log('NODE_ENV:' + process.env.NODE_ENV)
console.log('-------')
const devProxy = {
  '/index.php': {
    target: baseUrl,
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  },
  '/test.php': {
    target: baseUrl,
    pathRewrite: { '^/api': '' },
    changeOrigin: true
  }
}
module.exports = devProxy