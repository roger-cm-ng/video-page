module.exports = function (fontPaths) {
    return {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: fontPaths,
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'assets/images/',
                    publicPath: process.env.ASSET_CDN_PATH ? process.env.ASSET_CDN_PATH : ''
                }
            }
        ]
    };
};
