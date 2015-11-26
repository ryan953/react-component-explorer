/* jshint node: true */
var path = require('path');


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
   'react/addons': 'umd react',
   'recast': 'umd recast',
   'jscodeshift': 'umd jscodeshift',
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        // Query parameters are passed to node-sass
        loader: 'style!css?outputStyle=expanded&' +
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
