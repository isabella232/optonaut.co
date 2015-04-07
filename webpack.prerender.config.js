var React = require('react');
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');

function injectHtmlPlugin() {
    global.window = {
        addEventListener: function() {}
    };

    this.plugin('done', function() {
        var App = require('./build/prerender');
        var content = React.renderToString(React.createElement(App));
        var html = fs.readFileSync('./build/index.html').toString();
        html = html.replace('</div>', content + '</div>');
        html = html.replace('</title>', '</title><link href="style.css" rel="stylesheet">');
        fs.writeFileSync('./build/index.html', html);
        fs.unlinkSync('./build/prerender.js');
    });
}

module.exports = {
    entry: './app',
    target: 'node',
    output: {
        path: './build',
        filename: 'prerender.js',
        publicPath: '/',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css!postcss!less')
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.(svg|jpg|png)$/,
            loader: 'null'
        }, {
            test: /\.(ttf|eot|woff)$/,
            loader: 'null'
        }]
    },
    postcss: [autoprefixer({
        browsers: ['last 2 version']
    })],
    plugins: [
        injectHtmlPlugin,
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
