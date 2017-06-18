const path = require('path');
const spawn = require('child_process').spawn;
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

const port = process.env.PORT || 3000;

module.exports = Merge(CommonConfig, {
  context: path.resolve(__dirname, 'src'),
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
        .on('error', err => console.error(err));
    },
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
    ],
  },
  target: 'node-webkit',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
