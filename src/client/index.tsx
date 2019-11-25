import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

declare const module

hydrate(<App></App>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
