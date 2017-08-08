module.exports = function () {
    return {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
            {
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
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
        ]
    };
};
