var path = require('path');

module.exports = function exports() {
    return {
        test: /\.(scss)$/,
        include: [path.resolve('styles')],
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
