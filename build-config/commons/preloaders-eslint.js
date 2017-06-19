module.exports = function() {
  return {
    test: /\.(es6|js)$/,
    loader: 'eslint-loader',
    exclude: /(node_modules|build-config|coverage|docs|public|server|styles|test-config)/,
    enforce: 'pre'
  }
}
