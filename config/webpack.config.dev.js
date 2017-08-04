process.env.NODE_ENV = 'development';

const Merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const DevConfig = require('nw-react-scripts/config/webpack.config.dev');

module.exports = Merge(DevConfig, {
  devtool: 'inline-source-map',
  module: {
    rules: [
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
  //target: 'node-webkit',
});
