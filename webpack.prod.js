const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('production') }
    }),
    new CopyWebpackPlugin([
    ]),
  ],
})