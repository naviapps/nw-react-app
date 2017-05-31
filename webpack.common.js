const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
