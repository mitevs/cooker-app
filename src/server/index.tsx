/*eslint-env node*/
import app from './main'

const server = app.listen(3000, '0.0.0.0', () =>
  console.log('running on port 3000')
)

if (module.hot) {
  module.hot.accept('./main', () => {
    server.removeAllListeners('request')
    server.on('request', app.callback())
  })

  module.hot.accept()

  module.hot.dispose(() => {
    server.close()
  })
}
