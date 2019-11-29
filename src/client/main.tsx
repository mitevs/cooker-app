import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import Loadable from 'react-loadable'

Loadable.preloadReady().then(() =>
  hydrate(<App></App>, document.getElementById('app'))
)
