module.exports = function exports() {
  return {
    test: /\.(scss)$/,
    include: /styles/,
    loaders: [
        {
            loader: 'style-loader'
        },
        {
            loader: 'css-loader?modules=false'
        },
        {
            loader: 'postcss-loader'
        },
        {
            loader: 'sass-loader',
        }
    ]
  };
};
