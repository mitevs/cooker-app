const path = require('path');
const pathToInlineSvg = path.resolve(__dirname, '../../src/shared/components/atoms/Icon/svg');

module.exports = ({ config }) => {
    const rules = config.module.rules;

    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;

    rules.push({
        test: /\.svg$/,
        include: pathToInlineSvg,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
            }
        }]
    });

    rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'react-docgen-typescript-loader'
            }
        ]
    });

    config.resolve.extensions.push('.ts', '.tsx', '.svg');
    return config;
};
