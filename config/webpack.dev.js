const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => ({
  mode: argv.mode,
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
    // TODO: react refresh (https://github.com/pmmmwh/react-refresh-webpack-plugin) once that works with webpack 5
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(argv.mode),
      },
    }),
  ],
});
