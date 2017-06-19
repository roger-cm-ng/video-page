var path = require('path');
var webpack = require('webpack');

module.exports = function() {
  return {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
		extensions: ['*', '.js', '.es6']
	}
}
