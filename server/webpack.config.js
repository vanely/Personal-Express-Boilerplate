const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: './index.ts',
  target: 'node',
  stats: 'errors-only',
  devServer: {
    static: "./dist",
    hot: true,
    port: 4000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        use: 'file-loader',
      },
      // { test: /\.txt$/, use: 'raw-loader' },
    ],    
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
