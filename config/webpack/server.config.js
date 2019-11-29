const merge = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./base.config')
const CopyPlugin = require('copy-webpack-plugin')
const StartServerPlugin = require('start-server-webpack-plugin')
const appConfig = require('../app/convict').server

const serverSrc = '../../src/server'
const outDir = '../../dist'

const config = merge(baseConfig(appConfig, true), {
  target: 'node',
  entry: {
    server: [path.resolve(__dirname, serverSrc, 'index.tsx')],
  },
  output: {
    path: path.resolve(__dirname, outDir),
    filename: '[name].js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, serverSrc, 'views/**/*'),
        to: path.resolve(__dirname, outDir, 'views/[name].[ext]'),
        toType: 'template',
        force: true,
      },
    ]),
  ],
})

if (config.mode === 'development') {
  // add poll for hmr
  config.entry.server.push('webpack/hot/poll?1000')
  config.externals = [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ]

  // auto start server in dev mode
  config.plugins.push(
    new StartServerPlugin({
      name: 'server.js',
    })
  )
}

module.exports = config
