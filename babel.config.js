const presets = ['@babel/react', '@babel/preset-typescript']

const plugins = [
  [
    'module-resolver',
    {
      alias: {
        '@shared': './src/shared',
        '@client': './src/client',
        '@server': './src/server',
      },
    },
  ],
]

const serverPlugins = ['react-loadable/babel']

const clientPresets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
]

const serverPresets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
]

module.exports = {
  presets,
  plugins: [...plugins, ...serverPlugins],
  env: {
    client: {
      presets: clientPresets,
    },
    server: {
      presets: serverPresets,
    },
  },
}
