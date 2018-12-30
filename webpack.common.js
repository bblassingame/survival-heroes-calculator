//var webpack = require('webpack')
var path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'bin/')
const APP_DIR = path.resolve(__dirname, 'src/')
const ENTRY_PATH = path.resolve(APP_DIR, 'main.js')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: ['@babel/polyfill', 'react-hot-loader/patch', ENTRY_PATH],
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules:
    [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', 'react-hot-loader/babel']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpg)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['bin']),
    new HtmlWebpackPlugin({
      title: 'Survival Heroes:  Outpost',
      template: './src/template.ejs'
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
}