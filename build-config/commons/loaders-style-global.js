module.exports = function() {
  return {
    test: /\.sass/,
    exclude: /node_modules/,
    loaders: ['style', 'css', 'cssnext', 'sass']
  }
}
