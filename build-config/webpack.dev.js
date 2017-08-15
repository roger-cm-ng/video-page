var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var commons = require('./commons');
var path = require('path');
var fontPaths = [
    path.resolve('node_modules/bootstrap-sass/assets/fonts'),
    path.resolve('node_modules/font-awesome-sass/assets/fonts')
];

module.exports = {
    resolve: commons.resolve(),

    context: commons.context(),

    entry: commons.entry(),

    output: commons.output(),

    watch: true,

    plugins: [
        commons.providePlugin(),
        new ProgressBarPlugin(),
        commons.stylelintPlugin()
    ],

    devServer: commons.devServer(),

    module: {
        rules: [
            commons.preloadersEslint(),
            commons.loadersBabel(),
            commons.loadersGlobalStyle(),
            commons.loadersStyle(),
            commons.loadersFonts(fontPaths),
            commons.loadersImages(fontPaths),
            commons.loadersJson()
        ]
    }
};

