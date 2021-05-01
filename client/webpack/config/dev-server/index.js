const paths = require('../paths');
const proxy = require('./proxy');

module.exports = {
  devServer: {
    hot: true,
    port: 3001,
    allowedHosts: [],
    open: true,
    overlay: true,
    contentBase: [paths.appDist],
    historyApiFallback: true,
    // proxy,
  },
};
