module.exports = function () {
    return {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'assets/',
                    publicPath: 'bundles/'
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    query: {
                        progressive: true,
                        outputPath: 'assets/',
                        publicPath: 'bundles/',
                        mozjpeg: {
                            quality: 65
                        },
                        gifsicle: {
                            interlaced: false
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
                /* query: {
                    progressive: true,
                    optimizationLevel: 7,
                    interlaced: false,
                    outputPath: 'assets/',
                    publicPath: 'bundles/',
                    mozjpeg: {
                        quality: 65
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
                } */
            }
        ]
    };
};
