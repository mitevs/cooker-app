import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import config from '@client/config'

declare const module

console.log('CONFIG ', config)

hydrate(<App></App>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
