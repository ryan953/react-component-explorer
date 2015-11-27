/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),

  target: 'node',
  entry: {
    'webpack-rce-loader': './lib/loader/main.js',
  },

  output: {
    path: path.join(__dirname),
    filename: 'dist/[name].js',
    libraryTarget: 'umd',
    library: 'WebpackReactComponentExplorer',
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
