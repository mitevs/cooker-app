const path = require('path');


module.exports = {
    target: 'web',
    entry: {
        client: path.resolve(__dirname, './index.tsx')
    },
    output: {
        path: path.resolve(__dirname, '../../dist/public'),
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
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.sass']
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouterDOM'
    }
}
