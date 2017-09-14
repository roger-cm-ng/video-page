module.exports = function exports(globalStylePath) {
  return {
    test: /\.(scss)$/,
      exclude: [
          /node_modules/,
          globalStylePath
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
