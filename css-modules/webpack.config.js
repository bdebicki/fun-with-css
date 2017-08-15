const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*','.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
};

module.exports = config;