const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getConfig = require('./config');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|png|ttf|svg|woff|woff2)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          'img-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@common': getConfig('appCommon'),
      '@styles': getConfig('appStyles'),
      '@features': getConfig('appFeatures'),
      '@layouts': getConfig('appLayouts'),
      '@processes': getConfig('appProcesses'),
      '@pages': getConfig('appPages'),
      '@store': getConfig('appStore'),
      '@src': getConfig('appDir'),
      '@packageSrc': getConfig('appPackageJson'),
      '@assets': getConfig('appAssets'),
      '@api': getConfig('appApi'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
