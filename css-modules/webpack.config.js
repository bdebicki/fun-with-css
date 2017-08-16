const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
      },
      // {
      //   test: /\.less/,
      //   loader: 'style-loader!css-loader!less-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      //
      // }
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        })
      }
      // {
      //   test: /\.less/,
      //   use: ['style-loader', 'css-loader', 'less-loader'],
      //
      // }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
};

module.exports = config;