module.exports = function() {
  return {
    test: /\.(es6|js)$/,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  }
}
