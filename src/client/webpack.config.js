const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const isHmrEnabled = process.env.HMR === 'true'

// load based on env or env var
const appConfig = require('../../config/local.json')

let config = {
  target: 'web',
  mode: env,
  entry: {
    client: path.resolve(__dirname, './index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../../dist/public'),
    filename: '[name].js',
    publicPath: `${appConfig.cdnUrl}/`,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.sass'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDOM',
    // 'react-router': 'ReactRouterDOM',
    // 'react-router-dom': 'ReactRouterDOM'
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_CONFIG: JSON.stringify(appConfig),
      IS_SERVER: false,
    }),
  ],
}

if (env === 'development') {
  config = {
    ...config,
    devtool: 'inline-source-map',
    plugins: [...config.plugins],
  }

  if (isHmrEnabled) {
    config.devServer = {
      hot: true,
      publicPath: '/',
      historyApiFallback: true,
      port: 3001,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    }

    config.plugins.push(
      ...[
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.join(__dirname, '../server/views/index.dev.ejs'),
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ]
    )
  }
}

module.exports = config
