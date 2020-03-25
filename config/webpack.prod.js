const webpack = require('webpack');
const Assets = require('assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  entry: {
    bundle: path.resolve(__dirname, '../src/client/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$/,
        loader: 'ts-loader',
        // options: {
        //   babelrc: true,
        // },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  mode: argv.mode,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: false,
  plugins: [
    new Assets({
      path: 'dist',
      filename: 'assets.json',
      prettyPrint: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(argv.mode),
      },
    }),
    new CompressionPlugin({
      test: /\.js$/i,
      threshold: 10240,
    }),
  ],
});
