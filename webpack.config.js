const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Restaurant Dev',
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
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   // type: 'asset/resource',
      //   use: 'file-loader',
      // },  

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