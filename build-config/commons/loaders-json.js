module.exports = function() {
  return {
    test: /\.json/,
    exclude: /node_modules/,
    loader: 'json-loader'
  }
}
