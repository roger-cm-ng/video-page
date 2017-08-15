module.exports = function (fontPaths) {
    return {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: fontPaths,
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'fonts/',
                    publicPath: 'bundles/'
                }
            }
        ]
    }
};
