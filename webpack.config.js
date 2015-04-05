var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    cache: true,
    debug: true,
    devtool: false,
    entry: './app',
    output: {
        path: './build',
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        preLoaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel-loader?optional=runtime'
        }, {
            test: /\.(svg|jpg|png)$/,
            loader: 'url?limit=10000'
        }, {
            test: /\.(ttf|eot|woff)$/,
            loader: 'url?limit=100000'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
