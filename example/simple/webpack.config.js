'use strict';

const path = require('path');
const config = require('../webpack.common.config');

config.entry = path.join(__dirname, 'example.js');
config.output.path = path.join(__dirname, 'build');

config.module.rules.unshift({
  test: /\.(jpe?g|png|gif|svg)$/,
  resourceQuery: /[?&](sizes|placeholder)(=|&|\[|$)/,
  loader: 'srcset-loader',
});

module.exports = config;
