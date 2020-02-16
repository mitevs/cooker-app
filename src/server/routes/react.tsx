import React from 'react'
import Router from 'koa-router'
import { renderToString } from 'react-dom/server'
import Loadable from 'react-loadable'
import { Context } from 'koa'
import { getBundles } from 'react-loadable/webpack'
import client from '@server/graphql/client'
import App from '@server/react/App'
import StyleContext from 'isomorphic-style-loader/StyleContext'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stats = require('../../../dist/react-loadable.json')

const router = new Router<{}, Context>()

router.get('*', async (ctx) => {
  try {
    const modules: string[] = []
    await Loadable.preloadReady()

    const css = new Set()
    const insertCss = (...styles): void =>
      styles.forEach((style) => css.add(style._getCss()))

    const content = await renderToString(
      <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
        <StyleContext.Provider value={{ insertCss }}>
          <App ctx={ctx}></App>
        </StyleContext.Provider>
      </Loadable.Capture>
    )

    await ctx.render('index', {
      content,
      styles: [...css].join(''),
      state: client.extract(),
      preloadedBundles: getBundles(stats, modules),
    })
  } catch (err) {
    await ctx.render('error', { error: err.toString() })
  }
})

export default router
