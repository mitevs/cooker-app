const webpack = require('webpack')
const path = require('path')

const env = process.env.NODE_ENV || 'development'

const getConfig = (appConfig, isServer = false) => {
  const config = {
    mode: env,
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
        {
          test: /\.scss$/i,
          exclude: /node_modules/,
          use: [
            'isomorphic-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [
                    path.resolve(__dirname, '../../src/shared/styles'),
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
      new webpack.DefinePlugin({
        APP_CONFIG: JSON.stringify(appConfig.getProperties()),
        IS_SERVER: isServer,
      }),
    ],
  }

  if (env === 'development') {
    config.devtool = 'inline-source-map'
    config.plugins.push(
      ...[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
      ]
    )

    config.watchOptions = {
      ignored: /node_modules/,
    }
  }

  return config
}

module.exports = getConfig
