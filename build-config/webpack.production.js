const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const commons = require('./commons');
const webpack = require('webpack');
var fontPaths = [
    path.resolve('node_modules/bootstrap-sass/assets/fonts'),
    path.resolve('node_modules/font-awesome-sass/assets/fonts')
];

if (!process.env.ASSET_CDN_PATH) {
    throw new Error('No asset CDN path specified. Did you forget to define it?' +
						' (In trooper env, or use cross-env)');
}

module.exports = {
    resolve: commons.resolve(),

    context: commons.context(),

    entry: commons.entry(),

    output: commons.output(),

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        commons.providePlugin(),
        new ProgressBarPlugin(),
        commons.stylelintPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
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
            commons.loadersFonts(fontPaths),
            commons.loadersImages(fontPaths),
            commons.loadersJson()
        ]
    }
};
