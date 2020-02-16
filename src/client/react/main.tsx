import React from 'react'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import App from '@client/react/App'

Loadable.preloadReady().then(() =>
  hydrate(<App />, document.getElementById('app'))
)
