const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function exports() {
    return new HtmlWebpackPlugin({
        template: 'templates/index.ejs',
        inject: 'head'
    })
};