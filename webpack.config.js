'use strict'

module.exports = {
  entry: './src/index',
  output: {
    filename: 'dist/scripts.js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: '\.js$',
        loader: 'babel'
      }
    ]
  }
}