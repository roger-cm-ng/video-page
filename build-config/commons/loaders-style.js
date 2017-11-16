module.exports = function() {
  return {
    test: /\.scss/,
    exclude: /node_modules/,
    loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext', 'sass']
  }
}
