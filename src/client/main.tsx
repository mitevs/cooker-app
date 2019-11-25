import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'

export default (): void => hydrate(<App></App>, document.getElementById('app'))
