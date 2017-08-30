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
                    outputPath: 'assets/fonts/',
                    publicPath: process.env.ASSET_CDN_PATH ? process.env.ASSET_CDN_PATH : ''
                }
            }
        ]
    }
};
