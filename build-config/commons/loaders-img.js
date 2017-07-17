module.exports = function() {
  return {
    test: /\.(jpe?g|png|gif)$/i,
    use: [
      'url-loader?limit=10000',
      'img-loader'
    ]
  }
}
