const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('nw-react-scripts/config/webpack.config.prod');

config.module.rules[1].oneOf.unshift(
  {
    test: /\.scss/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        'sass-loader',
      ],
    }),
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
