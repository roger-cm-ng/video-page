module.exports = function exports(globalStylePath) {
    return {
        test: /\.(scss)$/,
        include: [ globalStylePath ],
        loaders: [
            {
                loader: 'style-loader'
            },
            {
                loader: 'css-loader?modules=false'
            },
            {
                loader: 'postcss-loader'
            },
            {
                loader: 'sass-loader',
            }
        ]
    };
};
