const path = {
  demo: 'http://127.0.0.1:8000',
  development: 'http://123.456.78.9',
  production: 'http://123.456.78.99'
}

module.exports = {
  base: path[process.env.NODE_ENV]
}