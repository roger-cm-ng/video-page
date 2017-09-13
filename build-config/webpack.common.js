const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const commons = require('./commons');

const fontPaths = [
    path.resolve('node_modules/bootstrap-sass/assets/fonts'),
    path.resolve('node_modules/font-awesome-sass/assets/fonts')
];
const globalStylePath = path.resolve('styles');

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
            commons.loadersGlobalStyle(globalStylePath),
            commons.loadersStyle(globalStylePath),
            commons.loadersFonts(fontPaths),
            commons.loadersImages(fontPaths),
            commons.loadersJson()
        ]
    }
};

