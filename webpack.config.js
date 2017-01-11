var debug = process.env.NODE_ENV !== "production";
var packageJSON = require('./package.json');
var webpack = require('webpack');
var path = require('path');


module.exports = {
  context: path.join(__dirname, ""),
  devtool: debug ? "inline-sourcemap" : null,
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?limit=1024&name=images/[name].[ext]'
      }
    ]
  },
  output: {
    path: '',
    filename: "./dist/index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  node: {
    net: "empty"
  }
};