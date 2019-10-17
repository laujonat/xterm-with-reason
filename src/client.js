const App = require('../lib/js/src/App.bs.js').make;  
import './client.css';
import './xterm.css';

import React from 'react';
import { hydrate } from 'react-dom';
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { FitAddon } from 'xterm-addon-fit';
import { AttachAddon } from 'xterm-addon-attach';


let renderClient = hydrate(
  React.createElement(App),
  document.getElementById('root')
);

let renderXTerm = () => {
  const protocol = (location.protocol === 'https:') ? 'wss://' : 'ws://';
  const port = location.port ? `:${location.port}` : '';
  
  const socketUrl = `${protocol}${location.hostname}${port}/shell`;
  const webSocket = new WebSocket(socketUrl);

  const shell = new Terminal();
  const fitAddon = new FitAddon();
  const attachAddon = new AttachAddon(webSocket);
  

  shell.loadAddon(new WebLinksAddon());
  shell.loadAddon(fitAddon);
  shell.loadAddon(attachAddon);

  
  shell.open(document.getElementById('terminal'));
  shell.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
}

window.addEventListener('DOMContentLoaded', renderClient, false);
window.addEventListener('DOMContentLoaded', renderXTerm, false);

if (module.hot) {
  module.hot.accept();
}
