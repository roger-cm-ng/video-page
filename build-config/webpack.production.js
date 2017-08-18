const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');

const CommonConfig = require('./webpack.common');

if (!process.env.ASSET_CDN_PATH) {
    throw new Error('No asset CDN path specified. Did you forget to define it?' +
						' (In trooper env, or use cross-env)');
}

module.exports = webpackMerge(CommonConfig, {
    output: {
        path: path.resolve('public/bundles'),
        filename: '[name].js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        })
    ],

    devtool: 'source-map'
});
