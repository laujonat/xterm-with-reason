const App = require('../lib/js/src/App.bs.js').make;  

// import path from 'path';
import React from 'react';
import express from 'express';
import 'xterm';
import 'xterm-addon-web-links'
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
.set('Content-Type', 'text/javascript')
.disable('x-powered-by')
.use(express.static(process.env.RAZZLE_PUBLIC_DIR)) // serves static assets in /public
.get('/*', (req, res) => {
    // console.log(process.env.RAZZLE_PUBLIC_DIR);
    // // No idea what these are about. Just copied them from the demo code
    // let container = document.getElementById('terminal');
    // console.log(new Terminal());
    // this.term = new Terminal(container);
    // term.applyAddon(attach);
    // term.applyAddon(fit);
    // term.applyAddon(winptyCompat);
    // // The terminal
    // // No idea what this does
    // term.winptyCompatInit();
    // // This kinda makes sense
    // term.open(container);
    // // Open the websocket connection to the backend
    // const protocol = (location.protocol === 'https:') ? 'wss://' : 'ws://';
    // const port = location.port ? `:${location.port}` : '';
    // const socketUrl = `${protocol}${location.hostname}${port}/shell`;
    // const socket = new WebSocket(socketUrl);
    // // // Attach the socket to the terminal
    // socket.onopen = (ev) => { 
    //   term.attach(socket); 
    // };
    // Not going to worry about close/error for the websocket
    const markup = renderToString(
      React.createElement(App)
    );
    res.send(
      `<!doctype html>
      <html lang="">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>XTerm-With-Reason | Terminal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${!!assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''}
        ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`}
        <link rel="stylesheet" href="node_modules/xterm/css/xterm.css" />
      </head>
      <body>
        <noscript key="noscript" id="show-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div id="root">${markup}</div>
      </body>
      </html>`
    );
  });

export default server;
