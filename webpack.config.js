/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),

  target: 'node',
  entry: {
    web: './lib/web.js',
    'react-component-explorer': './lib/node.js',
  },

  output: {
    path: path.join(__dirname),
    filename: '[name].js',
    libraryTarget: 'umd',
    // library: 'ReactComponentExplorer',
    // libraryTarget: 'commonjs2',
  },

  externals: {
   'react': 'umd react',
   'react/addons': 'umd react',
   'recast': 'umd recast',
   'jscodeshift': 'umd jscodeshift',
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './bower_components')) + '&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules')),
      },
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // query: {
        //   optional: ['runtime'],
        //   stage: 0,
        // },
      },
    ],
  },
};
