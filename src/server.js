const App = require('../lib/js/src/App.bs.js').make;


import React from 'react';
import express from 'express';
import pty from 'pty.js';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const app = express();
const expressWs = require('express-ws')(app);

// http://krasimirtsonev.com/blog/article/meet-evala-your-terminal-in-the-browser-extension
app.ws('/', (ws, req) => {
  let shell = pty.spawn('/bin/bash', [], {
    name: 'xterm-color',
  });

  // For all shell data send it to the websocket
  shell.on('data', (data) => {
    console.log('in data', data);
    ws.send(data);
  });

  // For all websocket data send it to the shell
  ws.on('message', (msg) => {
    console.log("in message");
    shell.write(msg);
  });
  ws.send('·');
});

app
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
          <div id="root">${markup}</div>
          <div id="terminal"></div>
      </body>
      </html>`
    );
  });

export default app;
