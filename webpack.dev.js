const Merge = require('webpack-merge');
const Common = require('./webpack.common.js');

module.exports = Merge(Common, {
  mode: 'development',
  devServer: { port: 3000, stats: 'errors-only' },
  devtool: 'inline-source-map'
});
