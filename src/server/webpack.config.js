const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: {
        server: path.resolve(__dirname, './index.tsx')
    },
    output: {
        path: path.resolve(__dirname, '../../dist'),
        filename: '[name].js'
    },
    mode: 'development',
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
    externals: [nodeExternals()]
}
