module.exports = function (fontPaths) {
    return {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: fontPaths,
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'images/',
                    publicPath: 'bundles/'
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    progressive: true,
                    mozjpeg: {
                        quality: 65
                    },
                    gifsicle: {
                        interlaced: true
                    },
                    optipng: {
                        optimizationLevel: 7
                    },
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    svgo: {
                        plugins: [
                            {
                                removeViewBox: false
                            },
                            {
                                removeEmptyAttrs: false
                            }
                        ]
                    }
                }
            }
        ]
    };
};
