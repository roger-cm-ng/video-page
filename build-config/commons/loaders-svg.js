module.exports = function exports() {
  return {
    test: /\.svg$/,
    use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'react-svg-loader',
                query: {
                    svgo: { // SHOULD THIS BE "svg"?
                        plugins: [{ removeTitle: false }],
                        floatPrecision: 2
                    }
                }
            }
        ]
	};
};

