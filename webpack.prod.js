import path from 'path';
import webpack from 'webpack';
import Merge from 'webpack-merge';
import CommonConfig from './webpack.common';

export default Merge(CommonConfig, {
  context: path.resolve(__dirname, 'src'),
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
    ],
  },
  target: "node-webkit",
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
});
