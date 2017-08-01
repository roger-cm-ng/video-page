const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = function exports() {
  return new StyleLintPlugin({
		configFile: '.stylelintrc',
		context: path.resolve('./components'),
		files: '**/*.scss',
		failOnError: false,
		quiet: false,
		exclude: /bootstrap\.scss/
	});
};

