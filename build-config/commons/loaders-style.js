module.exports = function() {
  return {
    test: /\.scss/,
    exclude: /node_modules/,
    loaders: ['style-loader', 'css-loader?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext-loader', 'sass-loader']
  }
}
