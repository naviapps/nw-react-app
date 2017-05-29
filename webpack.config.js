const path = require('path');
const spawn = require('child_process').spawn;
const webpack = require('webpack');

const port = process.env.PORT || 3000;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: `http://localhost:${port}/`,
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: 'localhost',
    port,
    publicPath: '/',
    historyApiFallback: true,
    setup() {
      spawn('run', ['.'], { stdio: 'inherit' })
        .on('close', code => process.exit(code))
        .on('error', err => console.error(err));
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
