const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
};

switch (process.env.NODE_ENV) {
  case 'development':
    config.devtool = 'inline-source-map';
}

module.exports = config;
