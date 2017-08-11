'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('nw-react-scripts/config/webpack.config.prod');

const publicPath = '/';
const shouldUseRelativeAssetPaths = publicPath === './';
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const cssFilename = 'static/css/[name].[contenthash:8].css';

const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? { publicPath: [cssFilename.split('/').length].join('../') }
  : {};

config.module.rules[1].oneOf.unshift(
  {
    test: /\.scss/,
    use: ExtractTextPlugin.extract(
      Object.assign(
        {
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: shouldUseSourceMap,
              },
            },
            'sass-loader',
          ],
        },
        extractTextPluginOptions
      )
    ),
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
