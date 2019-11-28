import React from 'react'
import Router from 'koa-router'
import { renderToString } from 'react-dom/server'
import client from '@server/graphql/client'
import App from '@server/App'
import { ServerStyleSheet } from 'styled-components'
import Loadable from 'react-loadable'
import { Context } from 'koa'

const router = new Router<{}, Context>()

router.get('*', async (ctx) => {
  const sheet = new ServerStyleSheet()

  try {
    const modules: string[] = []
    await Loadable.preloadReady()

    await ctx.render('index', {
      // switch to stream
      content: renderToString(
        sheet.collectStyles(
          <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
            <App ctx={ctx}></App>
          </Loadable.Capture>
        )
      ),
      stylesheets: sheet.getStyleTags(),
      state: client.extract(),
    })

    ctx.log.info(modules)

    sheet.seal()
  } catch (err) {
    await ctx.render('error', { error: err.toString() })
  }
})

export default router
