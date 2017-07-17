module.exports = function() {
  return {
    test: /\.(js|jsx|es6)$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  }
}
