import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import { join } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import client from './graphql/client';
import App from './App';
import { ServerStyleSheet } from 'styled-components';

const app = new Koa();
const router = new Router();

router.get('/test', ctx => {
   ctx.body = 'Hello Test Route';
});

router.get('*', async ctx => {
   const sheet = new ServerStyleSheet();
   const reactStr = renderToString(sheet.collectStyles(<App ctx={ctx}></App>));

   try {
      ctx.body = `
      <!DOCTYPE html>
         <html lang="en">
         <head>
            <meta charset="UTF-8">
            <title>React SSR</title>
            ${sheet.getStyleTags()}
         </head>
         <body>
            <div id="app">${reactStr}</div>
            <script>window.__APP_STATE__=${JSON.stringify(client.extract())}</script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/16.9.0/umd/react.production.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js"></script>
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.0.1/react-router-dom.min.js"></script>
            <script type="text/javascript" src="${APP_CONFIG.cdnUrl}/client.js"></script>
         </body>
      </html>
      `;

      sheet.seal();
   } catch (err) {
      ctx.body = err.toString();
   }
});

app.use(mount('/public', serve(join(__dirname, '/public'))));
app.use(router.routes());

export default app;
