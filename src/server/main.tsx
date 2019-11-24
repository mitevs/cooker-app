import Koa from 'koa'
import htmlMinify from 'koa-html-minifier'
import bodyParser from 'koa-bodyparser'
import serve from 'koa-static'
import mount from 'koa-mount'
import render from 'koa-ejs'
import { join } from 'path'
import routes from './routes'
import session from 'koa-session'
import pino from 'koa-pino-logger'

const app = new Koa()

app.keys = ['e1234123']

app.use(bodyParser())
app.use(session(app))
app.use(
  pino({
    enabled: true,
    prettyPrint: true,
    level: 'debug',
  })
)

// locals
app.use(async (ctx, next) => {
  ctx.state.APP_CONFIG = APP_CONFIG
  ctx.state.user = ctx.session.user
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
