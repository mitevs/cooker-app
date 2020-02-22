/*eslint-env node*/
import { join } from 'path'
import Koa from 'koa'
import htmlMinify from 'koa-html-minifier'
import bodyParser from 'koa-bodyparser'
import cookie from 'koa-cookie'
import serve from 'koa-static'
import mount from 'koa-mount'
import render from 'koa-ejs'
import pino from 'koa-pino-logger'
import compress from 'koa-compress'
import config from '@shared/config'
import { ME } from '@shared/graphql/queries/users'
import routes from '@server/routes'
import client from '@server/graphql/client'
import cors from 'koa-cors'

const app = new Koa()

app.use(cors())
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
app.use(routes())

export default app
