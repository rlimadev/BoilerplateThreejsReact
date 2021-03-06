const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: 'source-map',
  entry: {
    app: './main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './example'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        include: /src/,
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
};
