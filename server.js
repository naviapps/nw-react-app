const path = require('path');
const spawn = require('child_process').spawn;
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

const devServerConfig = webpackConfig.devServer;
const port = devServerConfig.port;
const host = devServerConfig.host;

new WebpackDevServer(webpack(webpackConfig), Object.assign(devServerConfig, {
  stats: { colors: true },
})).listen(port, host, err => {
  if (err) {
    return console.log(err);
  }

  spawn('nw', [], { stdio: 'inherit' })
    .on('close', code => process.exit(code))
    .on('error', err => console.error(err));

  console.log(`Listening at ${host}:${port}`);
});
