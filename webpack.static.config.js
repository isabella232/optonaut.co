'use strict';

var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function gather(routes, parentPath) {
    var result = [];
    routes = Array.isArray(routes) ? routes : [routes];

    // strips regexp chars out of the route, eg a trailing ?
    function fix(routePath) {
        return routePath.replace(/\?$/, '');
    }

    routes.forEach(function(route) {
        var props = route._store.props; // eslint-disable-line no-underscore-dangle
        var routePath = props.path;

        if (routePath) {
            routePath = parentPath ? path.join(parentPath, routePath) : routePath;

            result.push(fix(routePath));
        }
        if (props.children) {
            result = result.concat(gather(props.children, routePath));
        }
    });

    return result;
}

function writeHtmlPage(fileName, html) {
    // Replace trailing / with index.html
    if (fileName.match(/\/$/)) {
        fileName += 'index.html';
    } else {
        fileName += '/index.html';
    }

    var filePath = path.join('./build', fileName);

    // make all of the directories in filePath, like mkdir -p
    mkdirp.sync(path.dirname(filePath));
    fs.writeFileSync(filePath, html);
}

function injectHtmlPlugin() {
    this.plugin('emit', function(compilation, cb) {
        global.window = {}; // mock window
        var app = require('./build/prerender');
        var webpackStatsJson = compilation.getStats().toJson();
        var scriptHash = webpackStatsJson.hash;
        console.log(scriptHash);
        var paths = gather(app.routes);
        var pageCount = paths.length;
        paths.forEach(function(p) {
            app.routeToString(p, scriptHash, function(html) {
                pageCount--;
                writeHtmlPage(p, html);
                if (pageCount === 0) {
                    fs.unlinkSync('./build/prerender.js');
                    cb();
                }
            });
        });
    });
}

var config = require('./webpack.config');

config.plugins = [injectHtmlPlugin];

module.exports = [{
        entry: './app/static.jsx',
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
                loader: ExtractTextPlugin.extract('css!autoprefixer!less')
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
        plugins: [
            new ExtractTextPlugin('style.css', {
                allChunks: true
            })
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    config
];
