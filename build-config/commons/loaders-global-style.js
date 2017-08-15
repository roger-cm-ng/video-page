var path = require('path');

module.exports = function exports() {
    var test = path.resolve('styles');
    console.log('test: ', test);

  return {
    test: /\.(scss)$/,
    include: [ path.resolve('styles') ],
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
