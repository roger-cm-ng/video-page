module.exports = function (publicPath) {
    return {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
        'file-loader',
        {
            loader: 'image-webpack-loader',
            query: {
                progressive: true,
                optimizationLevel: 7,
                interlaced: false,
                outputPath: 'assets/',
                publicPath,
            mozjpeg: {
                quality: 65
            },
            pngquant: {
                quality: "65-90",
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
    ]};
};
