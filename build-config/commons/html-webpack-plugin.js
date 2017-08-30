const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function exports() {
    return new HtmlWebpackPlugin({
        template: 'assets/index.ejs',
        inject: 'head'
    })
};