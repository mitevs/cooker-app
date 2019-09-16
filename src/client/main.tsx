import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

export default () => hydrate(<App></App>, document.getElementById('app'));