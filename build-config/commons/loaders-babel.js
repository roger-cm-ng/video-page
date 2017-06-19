module.exports = function() {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  }
}
