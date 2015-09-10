var path = require('path'),
  assets_path = path.join('app', 'assets', 'javascripts'),
  client_path = path.join('client', 'assets', 'javascripts');

var config = {
  context: path.resolve(client_path),
  entry: './entry.jsx',
  output: {
    filename: 'react_app.js',
    path: path.resolve(assets_path)
  },
  externals: {
    jquery: 'var jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(client_path)
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};

module.exports = config;
