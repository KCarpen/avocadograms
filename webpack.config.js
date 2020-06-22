const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/': 'http://localhost:3000',
    },
    port: 8080,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['css-loader', 'sass-loader', 'style-loader'],
      },
    ],
  },
};
