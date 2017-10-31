const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'cheap-module-source-map',

  entry: [
    './index.jsx',
  ],

  context: resolve(__dirname, 'src'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '',
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new ExtractTextPlugin({ filename: './styles/style.css', disable: false, allChunks: true }),
    new CopyWebpackPlugin([{ from: './vendors', to: 'vendors' }]),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            { loader: 'sass-loader', query: { sourceMap: false } },
          ],
          publicPath: '../'
        }),
      },
      {
        test: /\.(png|ico|jpg|gif|woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?|[ot]tf(\?v=\d+.\d+.\d+)?|svg(\?v=\d+\.\d+\.\d+)?)$/,
        use: [
          {
            loader:'url-loader',
            options:{
              limit:10000
            }
          }
        ]
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader?name=fonts/[name].[ext]' },
    ]
  },
  resolve: {
    extensions: ['*','.js', '.jsx','.json']
  }
};

module.exports = config;
