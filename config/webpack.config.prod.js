process.env.NODE_ENV = 'production';

const Merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ProdConfig = require('nw-react-scripts/config/webpack.config.prod');

module.exports = Merge(ProdConfig, {
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader',
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimeType: 'application/font-woff',
        },
      },
    ],
  },
  target: 'node-webkit',
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
});
