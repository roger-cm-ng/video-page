var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var commons = require('./commons');

console.log('demo build');

module.exports = {
	resolve: commons.resolve(),

	context: commons.context(),

	entry: commons.entry(),

	output: commons.output(),

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
			commons.loadersStyle(),
			commons.loadersJson()
    ]
	}
}
