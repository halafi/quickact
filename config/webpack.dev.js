const webpack = require('webpack');
const Assets = require('assets-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  entry: {
    bundle: path.resolve(__dirname, '../src/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts$|\.tsx$/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
        },
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
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'), // index.html
    publicPath: '/', // where to serve bundle
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    // TODO: react refresh (https://github.com/pmmmwh/react-refresh-webpack-plugin) once that works with wp 5
    new Assets({
      path: 'dist',
      filename: 'assets.json',
      prettyPrint: true,
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(argv.mode),
      },
    }),
  ],
});
