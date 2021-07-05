module.exports = {
  mode: 'production',
  entry: {
    index: __dirname + '/src/index.ts',
    popup: __dirname + '/src/popup.ts',
  },
  output: {
    path: __dirname + '/dist',
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
