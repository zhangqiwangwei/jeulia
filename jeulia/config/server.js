'use strict';

const Webpack = require('webpack');
const http = require('http')
const webpackConfig = require('./webpack.dev.js');

const compiler = Webpack(webpackConfig);
console.log(compiler);
console.log('Starting server on http://localhost:8080');
const server = http.createServer((req, res) => {
  res.end();
})

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});
