module.exports = function (publicPath) {
    return {
        test: /\.(png|jpg|svg)/,
        loader: 'file-loader',
        options: {
            name: '[hash].[ext]',
            outputPath: 'assets/',
            publicPath
        }
    };
}
