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

  const socketUrl = `${protocol}${location.hostname}${port}`;
  const webSocket = new WebSocket(socketUrl);

  const shell = new Terminal();
  const fitAddon = new FitAddon();
  const attachAddon = new AttachAddon(webSocket);
  const weblinksAddon = new WebLinksAddon();

  shell.loadAddon(attachAddon);
  shell.loadAddon(weblinksAddon);
  shell.loadAddon(fitAddon);

  shell.open(document.getElementById('terminal'));
  fitAddon.fit();

  shell.write('\x1B[1;3;31mxterm.js\x1B[0m $ ');
}

window.addEventListener('DOMContentLoaded', renderClient, false);
window.addEventListener('DOMContentLoaded', renderXTerm, false);

if (module.hot) {
  module.hot.accept();
}
