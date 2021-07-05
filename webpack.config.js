const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: path.join(__dirname, '/src/index.ts'),
    popup: path.join(__dirname, '/src/popup.ts'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
