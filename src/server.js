const App = require('../lib/js/src/App.bs.js').make;  

// import path from 'path';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
.disable('x-powered-by')
.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
.get('/*', (req, res) => {
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
        ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
        <script src="${assets.client.js}" defer></script>
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
