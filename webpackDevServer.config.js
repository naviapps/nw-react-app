'use strict';

const spawn = require('child_process').spawn;
const config = require('./webpack.dev');
const paths = require('./lib/nw-react-scripts/config/paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

module.exports = (proxy, allowedHost) => {
  return {
    disableHostCheck:
      !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    watchContentBase: true,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    https: protocol === 'https',
    host: host,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    setup() {
      spawn('npm', ['run', 'nw'], { shell: true, stdio: 'inherit' })
        .on('close', code => process.exit(code))
        .on('error', err => console.error(err)); // eslint-disable-line no-console
    },
  };
};
