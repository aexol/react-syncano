const {resolve} = require('path')

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.jsx'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: ''
  },

  context: resolve(__dirname, 'src'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|ico|jpg|gif|woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?|[ot]tf(\?v=\d+.\d+.\d+)?|svg(\?v=\d+\.\d+\.\d+)?)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: 'file-loader?&name=fonts/[name].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.jsx?$/,
      options: {
        eslint: {
          configFile: resolve(__dirname, '.eslintrc'),
          cache: false
        }
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: './styles/style.css',
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([{from: 'vendors', to: 'vendors'}]),
    new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config
