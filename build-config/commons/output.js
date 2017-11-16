var path = require('path');

module.exports = function() {
  return {
		path: path.resolve('public/bundles'),
		filename: '[name].js'
	}
}
