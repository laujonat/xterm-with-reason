const App = require('../lib/js/src/App.bs.js').make;  
import './client.css';
import './xterm.css';

import React from 'react';
import { hydrate } from 'react-dom';
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { FitAddon } from 'xterm-addon-fit';


let renderClient = hydrate(
  React.createElement(App),
  document.getElementById('root')
);

let renderXTerm = () => {
    const terminal = new Terminal();
    const fitAddon = new FitAddon();
    terminal.loadAddon(new WebLinksAddon());
    terminal.loadAddon(new FitAddon());
    
    const container = document.getElementById('terminal');
    terminal.open(container);
    fitAddon.fit();
    // const protocol = (location.protocol === 'https:') ? 'wss://' : 'ws://';
    // const port = location.port ? `:${location.port}` : '';
    // const socketUrl = `${protocol}${location.hostname}${port}/shell`;
    // const socket = new WebSocket(socketUrl);

    // Attach the socket to the terminal
    // socket.onopen = (ev) => { terminal.attach(socket); };
}

window.addEventListener('DOMContentLoaded', renderClient, false);
window.addEventListener('DOMContentLoaded', renderXTerm, false);

if (module.hot) {
  module.hot.accept();
}
