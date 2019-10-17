const App = require('../lib/js/src/App.bs.js').make;  


import React from 'react';
import express from 'express';
import pty from 'pty.js';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();
const expressWs = require('express-ws')(server);


// Instantiate shell and set up data handlers
expressWs.app.ws('/shell', (ws, req) => {
  // Spawn the shell
  // Compliments of http://krasimirtsonev.com/blog/article/meet-evala-your-terminal-in-the-browser-extension
  let shell = pty.spawn('/bin/bash', [], {
    name: 'xterm-color',
  });

  // For all shell data send it to the websocket
  shell.on('data', (data) => {
    ws.send(data);
  });

  // For all websocket data send it to the shell
  ws.on('message', (msg) => {
    shell.write(msg);
  });
});

server
.set('Content-Type', 'text/javascript')
.disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const markup = renderToString(
      <App />
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
          ? `<link rel="stylesheet" href="${assets.client.css}">
             <link rel="stylesheet" href="${assets.xterm.css}"/>`
          : ''}
          ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`}
          </head>
          <body>
          <noscript>Please enable Javascript to view this page.</noscript>
          <div id="terminal"></div>
          <div id="root">${markup}</div>
      </body>
      </html>`
    );
  });

export default server;
