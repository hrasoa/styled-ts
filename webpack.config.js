const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new BundleAnalyzerPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: [/node_modules/],
      use: [
        { loader: 'babel-loader' },
        { loader: 'ts-loader' },
      ]
    }]
  },
};