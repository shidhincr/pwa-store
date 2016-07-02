const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const util = require('./util');

module.exports = {
  entry: {
    polyfills: [
      //'core-js/shim',
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone'
    ],
    vendor: [
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/http',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular2-material/button',
      '@angular2-material/card',
      '@angular2-material/checkbox',
      '@angular2-material/grid-list',
      '@angular2-material/input',
      '@angular2-material/list',
      '@angular2-material/radio',
      '@angular2-material/progress-bar',
      '@angular2-material/progress-circle',
      '@angular2-material/sidenav',
      '@angular2-material/slide-toggle',
      '@angular2-material/tabs',
      '@angular2-material/toolbar',
      'rxjs/Rx'
    ],
    main: './src/main.ts'
  },
  output: {
    path: util.root('dist')
  },
  resolve: {
    root: util.root('src'),
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'], exclude: [/\.(spec|e2e)\.ts$/] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.less$/, loaders: ['raw-loader', 'postcss-loader', 'less-loader'] },
      { test: /\.scss$/, loaders: ['raw-loader', 'postcss-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({name: ['vendor', 'polyfills']}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'dependency'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 9000,
    contentBase: 'src/',
    historyApiFallback: true
  },
  // thirdparty loader-configs
  postcss: function () {
    return [ autoprefixer ];
  }
};
