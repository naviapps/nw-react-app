'use strict';

const config = require('nw-react-scripts/config/webpack.config.dev');

config.module.rules[1].oneOf.unshift(
  {
    test: /\.scss/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      'sass-loader',
    ],
  },
  {
    test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: 'static/media/[name].[hash:8].[ext]',
      mimeType: 'application/font-woff',
    },
  }
);

module.exports = config;
