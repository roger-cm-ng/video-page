var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var commons = require('./commons');
var webpack = require('webpack');

console.log('prod build');

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
			commons.loadersJson()
    ]
	}
}
