process.env.NODE_ENV = 'development';

const spawn = require('child_process').spawn;
const Merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const CommonConfig = require('./lib/nw-react-scripts/config/webpack.config.dev');

module.exports = Merge(CommonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    setup() {
      spawn('npm', ['run', 'nw'], { shell: true, stdio: 'inherit' })
        .on('close', code => process.exit(code))
        .on('error', err => console.error(err)); // eslint-disable-line no-console
    },
  },
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
