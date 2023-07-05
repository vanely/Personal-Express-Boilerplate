const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: './index.ts',
  target: 'node',
  devServer: {
    static: "./dist",
    hot: true,
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
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
