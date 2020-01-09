const path = {
  demo: 'http://123.456.78.9',
  development: 'http://123.456.78.9',
  production: 'http://123.456.78.99'
}

module.exports = {
  base: path[process.env.NODE_ENV]
}