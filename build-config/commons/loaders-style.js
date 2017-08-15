var path = require('path');

module.exports = function exports() {
  return {
    test: /\.(scss)$/,
      exclude: [
          /node_modules/,
          path.resolve('styles')
      ],
    loaders: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader?modules&localIdentName=[local]---[hash:base64:5]'
        },
        {
            loader: 'postcss-loader'
        },
        {
            loader: 'sass-loader'
        }
    ]
  };
};
