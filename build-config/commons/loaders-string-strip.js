var WebpackStrip = require('strip-loader');

module.exports = function(str) {
  return {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: WebpackStrip.loader(str)
  }
}
