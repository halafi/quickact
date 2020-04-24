const webpack = require('webpack');
const Assets = require('assets-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => ({
  entry: {
    bundle: path.resolve(__dirname, '../src/client/index.ts'),
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
    // contentBase: path.resolve(__dirname, '../public'), // middleware can be used to serve static assets
    publicPath: '/', // where to serve bundle
    disableHostCheck: true,
    historyApiFallback: true,
    // host: '0.0.0.0', // needed for docker development
    proxy: {
      '*': 'http://localhost:3000',
    },
  },
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
  ],
});
