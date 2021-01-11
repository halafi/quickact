const webpack = require('webpack');

const base = require('./webpack.base');

module.exports = (env, argv) => ({
  ...base,
  mode: argv.mode,
  devtool: false,
  plugins: [
    ...base.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(argv.mode),
      },
    }),
  ],
});
