const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

const commons = require('./commons');

module.exports = {
    resolve: commons.resolve(),

    context: commons.context(),

    entry: commons.entry(),

    plugins: [
        commons.providePlugin(),
        new ProgressBarPlugin(),
        commons.stylelintPlugin(),
        commons.commonCodeChunks(),
        commons.htmlWebpackPlugin()
    ],

    devServer: commons.devServer(),

    module: {
        rules: [
            commons.preloadersEslint(),
            commons.loadersBabel(),
            commons.loadersGlobalStyle(),
            commons.loadersStyle(),
            commons.loadersFonts(),
            commons.loadersImages(),
            commons.loadersJson()
        ]
    }
};

