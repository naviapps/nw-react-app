import path from 'path';
import { spawn } from 'child_process';
import webpack from 'webpack';
import Merge from 'webpack-merge';
import CommonConfig from './webpack.common';

const port = process.env.PORT || 3000;

export default Merge(CommonConfig, {
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
      spawn('run', ['.'], { stdio: 'inherit' })
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
  target: "node-webkit",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
