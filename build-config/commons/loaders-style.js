module.exports = function exports() {
  return {
    test: /\.(scss)$/,
    exclude: /node_modules/,
    loaders: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader',
            options: {
                modules: true,
                localIdentName: '[local]---[hash:base64:5]'
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
