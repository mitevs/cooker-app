const merge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./base.config')
const appConfig = require('../app/convict')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ReactLoadablePlugin = require('react-loadable/webpack')
  .ReactLoadablePlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

const serverSrc = '../../src/server'
const clientSrc = '../../src/client'
const outDir = '../../dist'
const isAnalyze = process.env.ANALYZE === 'true'

const config = merge(baseConfig(appConfig.client), {
  target: 'web',
  entry: {
    main: path.resolve(__dirname, clientSrc, 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, outDir, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: `${appConfig.server.get('cdnUrl')}/`,
  },
  optimization: {
    sideEffects: false,
    usedExports: true,
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
        },
        commons: {
          name: 'commons',
          minChunks: 2,
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: path.join(__dirname, outDir, 'react-loadable.json'),
    }),
  ],
})

if (isAnalyze) {
  config.plugins.push(new BundleAnalyzerPlugin())
}

if (config.mode === 'development') {
  config.devServer = {
    contentBase: path.join(__dirname, outDir),
    publicPath: '/',
    compress: true,
    hot: true,
    port: 3001,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  }

  config.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, serverSrc, 'views/index.dev.ejs'),
    })
  )
}

module.exports = config
