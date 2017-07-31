const path = require('path');

module.exports = function exports() {
  return {
		path: path.resolve('public/bundles'),
		filename: '[name].js'
	};
};
