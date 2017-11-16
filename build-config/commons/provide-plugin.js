var webpack = require('webpack');

module.exports = function() {
  return new webpack.ProvidePlugin({
    'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    'matchMedia': 'imports?this=>global!exports?global.matchMedia!match-media'
  })
}
