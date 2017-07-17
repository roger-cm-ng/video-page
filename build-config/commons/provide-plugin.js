var webpack = require('webpack');

module.exports = function() {
  return new webpack.ProvidePlugin({
    'Promise': 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
    'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    'matchMedia': 'imports-loader?this=>global!exports-loader?global.matchMedia!match-media'
  })
}
