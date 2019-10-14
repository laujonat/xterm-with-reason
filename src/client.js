const App = require('../lib/js/src/App.bs.js').make;  
import './client.css';

import React from 'react';
import { hydrate } from 'react-dom';

const renderClient = hydrate(
  React.createElement(App),
  document.getElementById('root')
);

window.addEventListener('DOMContentLoaded', renderClient, false);

if (module.hot) {
  module.hot.accept();
}
