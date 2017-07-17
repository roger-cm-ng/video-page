var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var commons = require('./commons');
var webpack = require('webpack');

if (!process.env.ASSET_CDN_PATH) {
    throw 'No asset CDN path specified. Did you forget to define it? (In trooper env, or use cross-env)';
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
			compress:{
				warnings: true
			}
		})
	],

	devServer: commons.devServer(),

	module: {
		rules: [
			commons.preloadersEslint(),
			commons.loadersBabel(),
			commons.loadersStyle(),
			commons.loadersJson(),
			commons.loadersImg(),
      // commons.loadersImages(process.env.ASSET_CDN_PATH),
			commons.loadersSvg()
    ]
	}
}
