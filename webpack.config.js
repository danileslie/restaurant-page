const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'The Busy Behemoth',
        filename: 'index.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        use: 'html-loader'
    },
    {
        test: /\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'images/[name][ext]'
        }
    }
    ],
  },
};