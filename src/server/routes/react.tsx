import React from 'react'
import Router from 'koa-router'
import { renderToString } from 'react-dom/server'
import client from '@server/graphql/client'
import App from '@server/App'
import { ServerStyleSheet } from 'styled-components'
import Loadable from 'react-loadable'

const router = new Router()

router.get('*', async (ctx) => {
  const sheet = new ServerStyleSheet()

  try {
    await Loadable.preloadReady()

    await ctx.render('index', {
      // switch to stream
      content: renderToString(
        sheet.collectStyles(<App ctx={ctx}></App>)
      ),
      stylesheets: sheet.getStyleTags(),
      state: client.extract(),
    })

    // sheet.seal();
  } catch (err) {
    await ctx.render('error', { error: err.toString() })
  }
})

export default router
