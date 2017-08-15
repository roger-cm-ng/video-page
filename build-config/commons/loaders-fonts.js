var path = require('path');

module.exports = function () {
    return {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: /node_modules/,
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    publicPath: 'bundles/'
                }
            }
        ]
    }
};
