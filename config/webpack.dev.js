const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
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
    new MiniCssExtractPlugin({
      filename: 'all.css',
      chunkFilename: 'tailwind.css',
    }),
    // TODO: react refresh (https://github.com/pmmmwh/react-refresh-webpack-plugin) once that works with webpack5
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(argv.mode),
      },
    }),
  ],
});
