const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const Merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const CommonConfig = require('./webpack.common');

module.exports = Merge(CommonConfig, {
  entry: './index.js',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=\d\.\d\.\d)?$/,
        loader: 'file-loader',
      },
    ],
  },
  target: 'node-webkit',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
