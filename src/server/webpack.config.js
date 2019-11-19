const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

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
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
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
            APP_CONFIG: JSON.stringify(appConfig),
            IS_SERVER: true
        }),
        new CopyPlugin([
            {
                from: path.resolve(__dirname, './views/**/*'),
                to: path.resolve(__dirname, '../../dist/views/[name].[ext]'),
                toType: 'template',
                force: true
            }
        ])
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
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new StartServerPlugin({
                name: 'server.js'
            })
        ]
    }
}

module.exports = config;
