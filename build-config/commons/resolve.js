var path = require('path');
var webpack = require('webpack');

module.exports = function() {
  return {
		root: [
			path.resolve(path.join(__dirname, '..'))
		],
		extensions: ['', '.js', '.es6']
	}
}
