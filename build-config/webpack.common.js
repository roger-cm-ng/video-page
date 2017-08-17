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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return module.resource && /node_modules/.test(module.resource);
            }
        })
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

