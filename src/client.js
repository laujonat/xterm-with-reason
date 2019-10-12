const App = require('../lib/bs/src/App').comp;

import './client.css';

import React from 'react';
import { render } from 'react-dom';

// No JSX required, it's already in JS.
render(
  React.createElement(App, {
    title: 'Welcome to Razzle Reason React!',
  }),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
