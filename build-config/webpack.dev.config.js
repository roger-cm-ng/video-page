const path = require('path');
const webpack = require('webpack');
// var dedupePlugin = new webpack.optimize.DedupePlugin();
const providePlugin = new webpack.ProvidePlugin({
	Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
  // 'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
	matchMedia: 'imports?this=>global!exports?global.matchMedia!match-media'
});

module.exports = {
	resolve: {
		root: [
			path.resolve(path.join(__dirname, '..'))
		],
		extensions: ['', '.js', '.es6']
	},
	context: path.resolve('../components'),
	entry: './app/qa-app.js',
	output: {
		path: path.resolve('../public/js'),
		filename: 'qa-app.js'
	},

	plugins: [
		providePlugin,
		new webpack.DefinePlugin({
        'process.env': {
            BROWSER: 1
        }
    })
	],

	devServer: {
		contentBase: '../public'
	},

	module: {
		preLoaders: [
      {
        test: /\.(es6|js)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|build-config|coverage|docs|public|server|styles|test-config)/
      }
    ],

		loaders: [
			{
				test: /\.(es6|js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss/,
				exclude: /node_modules|styles/,
				loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext', 'sass']
			},
			{
				test: /\.scss/,
				include: /styles/,
				loaders: ['style', 'css', 'cssnext', 'sass']
			},
			{
				test: /\.json/,
				exclude: /node_modules/,
				loader: 'json-loader'
			}
		]
	}
};
