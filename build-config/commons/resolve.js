const path = require('path');

module.exports = function exports() {
  return {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
		extensions: ['*', '.js', '.es6']
	};
};

