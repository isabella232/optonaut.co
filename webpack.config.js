var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/client.js',
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
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
          test: /\.scss/,
          loader: 'style!css?localIdentName=[path][local]-[hash:base64:5]!autoprefixer!sass'
        }, {
            test: /\.less$/,
            loader: 'style!css!autoprefixer!less'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel?optional=runtime'
        }, {
            test: /\.(svg|jpg|png)$/,
            loader: 'url?limit=10000'
        }, {
            test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'url?limit=100000'
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })],
    resolve: {
        extensions: ['', '.js']
    }
};
