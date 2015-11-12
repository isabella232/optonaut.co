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
    //preLoaders: [{
    //test: /\.js$/,
    //exclude: /node_modules/,
    //loader: 'eslint'
    //}],
    loaders: [{
      test: /\.scss/,
      loader: 'style!css?localIdentName=[path][local]-[hash:base64:5]!autoprefixer!sass'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.(svg|jpg|png)$/,
      loader: 'file'
    }, {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'file'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })],
  resolve: {
    extensions: ['', '.js']
  }
};
