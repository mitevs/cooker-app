import React from 'react'
import Router from 'koa-router'
import { renderToString } from 'react-dom/server'
import client from '@server/graphql/client'
import App from '@server/App'
import { ServerStyleSheet } from 'styled-components'
import Loadable from 'react-loadable'
import { Context } from 'koa'
import { getBundles } from 'react-loadable/webpack'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stats = require('../../../dist/react-loadable.json')

const router = new Router<{}, Context>()

router.get('*', async (ctx) => {
  const sheet = new ServerStyleSheet()

  try {
    const modules: string[] = []
    await Loadable.preloadReady()

    const content = renderToString(
      sheet.collectStyles(
        <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
          <App ctx={ctx}></App>
        </Loadable.Capture>
      )
    )

    sheet.seal()

    await ctx.render('index', {
      content,
      stylesheets: sheet.getStyleTags(),
      state: client.extract(),
      preloadedBundles: getBundles(stats, modules),
    })
  } catch (err) {
    await ctx.render('error', { error: err.toString() })
  }
})

export default router
