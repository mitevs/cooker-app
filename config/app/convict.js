const fs = require('fs')
const path = require('path')
const convict = require('convict')

const baseConfig = {
  env: {
    doc: 'The application environment',
    format: ['development', 'production'],
    default: 'development',
    env: 'NODE_ENV',
  },
}

// override props or define special ones for server
const client = convict({
  ...baseConfig,
})

// override props or define special ones for server
const server = convict({
  ...baseConfig,
  cdnUrl: {
    doc: 'CDN Url for the static files',
    format: 'String',
    default: '/public',
    env: 'CDN_URL',
  },
})

if (client.get('env') === 'development') {
  const clientEnvPath = path.join(__dirname, 'client.json')

  if (fs.existsSync(clientEnvPath)) {
    client.loadFile(serverEnvPath)
  }
}

if (server.get('env') === 'development') {
  const serverEnvPath = path.join(__dirname, 'server.json')

  if (fs.existsSync(serverEnvPath)) {
    server.loadFile(serverEnvPath)
  }
}

module.exports = {
  client,
  server,
}
