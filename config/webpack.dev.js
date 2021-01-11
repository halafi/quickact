const webpack = require('webpack');
const path = require('path');

const base = require('./webpack.base');

module.exports = (env, argv) => ({
  ...base,
  mode: argv.mode,
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'), // index.html
    publicPath: '/', // where to serve bundle
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    ...base.plugins,
    // TODO: react refresh (https://github.com/pmmmwh/react-refresh-webpack-plugin) once that works with webpack 5
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify(argv.mode),
      },
    }),
  ],
});
