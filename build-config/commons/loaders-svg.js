module.exports = function() {
  return {
	  test: /\.svg$/,
	  use: [
	    {
	      loader: 'babel-loader'
	    },
	    {
	      loader: 'react-svg-loader',
	      query: {
	        svgo: {
	          plugins: [{removeTitle: false}],
	          floatPrecision: 2
	        }
	      }
	    }
	  ]
	}
}
