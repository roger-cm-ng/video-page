module.exports = function exports() {
  return {
    test: /\.(scss)$/,
    exclude: /node_modules/,
    loaders: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader', // 'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]'
            options: {
                modules: true,
                localIdentName: '[local]---[hash:base64:5]',
                importLoaders: 2
            }
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
