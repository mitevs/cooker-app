/*eslint-env node*/
import Koa from 'koa'
import htmlMinify from 'koa-html-minifier'
import bodyParser from 'koa-bodyparser'
import cookie from 'koa-cookie'
import serve from 'koa-static'
import mount from 'koa-mount'
import render from 'koa-ejs'
import { join } from 'path'
import routes from './routes'
import pino from 'koa-pino-logger'
import compress from 'koa-compress'
import config from '@server/config'
import client from '@server/graphql/client'
import { ME } from '@shared/graphql/queries/users'

const app = new Koa()

app.use(cookie())
app.use(
  compress({
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH,
  })
)

app.use(bodyParser())
app.use(
  pino({
    enabled: true,
    prettyPrint: true,
    level: 'debug',
  })
)

// locals
app.use(async (ctx, next) => {
  ctx.state.cdnUrl = config.cdnUrl

  const authToken = ctx.cookies.get('token')

  if (authToken) {
    const res2 = await client.query({
      query: ME,
      context: {
        headers: {
          Authorization: authToken,
        },
      },
    })

    ctx.state.user = res2.data.me
  }

  await next()
})

render(app, {
  root: join(__dirname, 'views'),
  // debug: true,
  layout: false,
  viewExt: 'ejs',
  cache: false,
})

app.use(htmlMinify())
app.use(mount('/public', serve(join(__dirname, '/public'))))
routes.forEach((router) => app.use(router.routes()))

export default app
