var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer-core');

module.exports = {
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
            loader: 'style!css!postcss!less'
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel?optional=runtime'
        }, {
            test: /\.(svg|jpg|png)$/,
            loader: 'url?limit=10000'
        }, {
            test: /\.(ttf|eot|woff)$/,
            loader: 'url?limit=100000'
        }]
    },
    postcss: [autoprefixer({
        browsers: ['last 2 version']
    })],
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
