const fs = require('fs-extra')
const mkdirp = require('mkdirp')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function gather(routes, parentPath) {
  var result = []
  routes = Array.isArray(routes) ? routes : [routes]

  // strips regexp chars out of the route, eg a trailing ?
  function fix(routePath) {
    return routePath.replace(/\?$/, '')
  }

  routes.forEach(function(route) {
    const props = route.props
    var routePath = props.path

    if (routePath) {
      routePath = parentPath ? path.join(parentPath, routePath) : routePath

      result.push(fix(routePath))
    }
    if (props.children) {
      result = result.concat(gather(props.children, routePath))
    }
  })

  return result
}

function writeHtmlPage(fileName, html) {
  // Replace trailing / with index.html
  if (fileName.match(/\/$/)) {
    fileName += 'index.html'
  } else {
    fileName += '/index.html'
  }

  const filePath = path.join('./build', fileName)

  // make all of the directories in filePath, like mkdir -p
  mkdirp.sync(path.dirname(filePath))
  fs.writeFileSync(filePath, html)
}

function injectHtmlPlugin() {
  this.plugin('emit', function(compilation, cb) {
    global.window = {} // mock window
    const app = require('./build/prerender')
    const webpackStatsJson = compilation.getStats().toJson()
    const scriptHash = webpackStatsJson.hash
    console.log(scriptHash)
    const paths = gather(app.routes)
    console.log(paths)
    var pageCount = paths.length
    paths.forEach(function(p) {
      app.routeToString(p, scriptHash, function(html) {
        pageCount--
        writeHtmlPage(p, html)
        if (pageCount === 0) {
          fs.unlinkSync('./build/prerender.js')
          cb()
        }
      })
    })
  })
}

function copyAssets() {
  this.plugin('emit', function(compilation, cb) {
    fs.copy('./app/assets', './build', cb)
  })
}

const prerenderConfig = {
  entry: './app/static.js',
  target: 'node',
  output: {
    path: './build',
    filename: 'prerender.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.scss/,
      loader: ExtractTextPlugin.extract('css!autoprefixer!sass')
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.(svg|jpg|png)$/,
      loader: 'file!image-webpack'
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'null'
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
  ],
  resolve: {
    extensions: ['', '.js']
  }
}

const renderConfig = {
  entry: './app/client.js',
  output: {
    path: './build',
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.scss/,
      loader: 'style!css!autoprefixer!sass'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.(svg|jpg|png)$/,
      loader: 'file!image-webpack'
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'url?limit=100000'
    }]
  },
  plugins: [injectHtmlPlugin, copyAssets],
  resolve: {
    extensions: ['', '.js']
  }
}

// array config syntax: runs webpack multiple times
module.exports = [
  prerenderConfig,
  renderConfig
]
