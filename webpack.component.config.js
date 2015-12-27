/* jshint node: true */
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),

  target: 'node',
  entry: {
    'rce': './lib/component/main.js',
  },

  output: {
    path: path.join(__dirname),
    filename: 'dist/[name].js',
    libraryTarget: 'umd',
  },

  externals: {
    'react': 'umd react',
    'react-dom': 'umd react-dom',
    'react/addons': 'umd react',
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV == 'production'),
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        // Query parameters are passed to node-sass
        loader: 'style!css?outputStyle=expanded' +
          '&includePaths[]=' + (path.resolve(__dirname, './bower_components')) +
          '&includePaths[]=' + (path.resolve(__dirname, './node_modules')),
      },
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-0', 'es2015', 'react'],
        },
      },
    ],
  },
};
