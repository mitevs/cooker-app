import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(<App></App>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}
