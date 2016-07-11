const commonConfig = require('./webpack.config.common');
const R = require('ramda');

module.exports = Object.assign(R.omit(['shared'], commonConfig), {
  entry: commonConfig.shared.modules,
  output: {
    filename: 'bundle.js',
    path: commonConfig.shared.output.path,
    publicPath: '/',
  },
});
