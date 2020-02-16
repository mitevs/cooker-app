const clientConfig = require('../webpack/client.config')
const path = require('path')
const pathToInlineSvg = path.resolve(
  __dirname,
  '../../src/shared/components/atoms/Icon/svg'
)

module.exports = ({ config }) => {
  const rules = config.module.rules

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'))
  fileLoaderRule.exclude = pathToInlineSvg

  rules.push(...clientConfig.module.rules)
  config.resolve.extensions.push(...clientConfig.resolve.extensions)

  // rules.push({
  //   test: /\.svg$/,
  //   include: pathToInlineSvg,
  //   use: [
  //     {
  //       loader: '@svgr/webpack',
  //       options: {
  //         icon: true,
  //       },
  //     },
  //   ],
  // })

  // rules.push({
  //   test: /\.(ts|tsx)$/,
  //   use: [
  //     {
  //       loader: 'babel-loader',
  //     },
  //     {
  //       loader: 'react-docgen-typescript-loader',
  //     },
  //   ],
  // })

  // rules.push({
  //   test: /\.scss$/i,
  //   exclude: /node_modules/,
  //   use: [
  //     'style-loader',
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         modules: true,
  //       },
  //     },
  //     'sass-loader',
  //   ],
  // })

  // config.resolve.extensions.push('.ts', '.tsx', '.svg')
  return config
}
