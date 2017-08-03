const path = require('path');
const spawn = require('child_process').spawn;
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const Merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const CommonConfig = require('./webpack.common');

const port = process.env.PORT || 3000;

module.exports = Merge(CommonConfig, {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port,
    publicPath: '/',
    historyApiFallback: true,
    setup() {
      spawn('npm', ['run', 'nw'], { shell: true, stdio: 'inherit' })
        .on('close', code => process.exit(code))
        .on('error', err => console.error(err)); // eslint-disable-line no-console
    },
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  target: 'node-webkit',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
