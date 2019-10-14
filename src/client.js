const App = require('./App.bs.js').make;  

import './client.css';

import React from 'react';
import { render } from 'react-dom';

// No JSX required, it's already in JS.
render(
  React.createElement(App),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
