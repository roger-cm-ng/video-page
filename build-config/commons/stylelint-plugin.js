var path = require('path');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function() {
  return new StyleLintPlugin({
		configFile: '.stylelintrc',
		context: path.resolve('./components'),
		files: '**/*.scss',
		failOnError: false,
		quiet: false,
		exclude: /bootstrap\.scss/
	})
}
