const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isHmrEnabled = process.env.HMR;

// load based on env
const appConfig = require('../../config/local.json');

let config = {
    target: 'node',
    mode: env,
    entry: [
        path.resolve(__dirname, './index.tsx')
    ],
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.sass']
    },
    externals: [nodeExternals()],
    plugins: [
        new webpack.DefinePlugin({
            APP_CONFIG: JSON.stringify(appConfig)
        })
    ]
}

if (env === 'development' && isHmrEnabled) {
    config = {
        ...config,
        entry: ['webpack/hot/poll?1000', ...config.entry],
        externals: [nodeExternals({
            whitelist: ['webpack/hot/poll?1000']
        })],
        plugins: [
            ...config.plugins,
            new StartServerPlugin({
                name: 'server.js'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ]
    }
}

module.exports = config;
