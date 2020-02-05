import axios from 'axios'
import Router from 'koa-router'
import { ME } from '@shared/graphql/queries/users'
import client from '@server/graphql/client'
import { ContextSession } from 'koa-session'

const router = new Router<{}, ContextSession>()

router.post('/login', async (ctx) => {
  const { username, password } = ctx.request.body

  try {
    const res = await axios.post('http://localhost:8080/token', {
      username,
      password,
    })

    const authToken = res.headers['authorization'] || '' //.replace('Bearer ', '');

    const res2 = await client.query({
      query: ME,
      context: {
        headers: {
          Authorization: authToken,
        },
      },
    })

    ctx.cookies.set('token', authToken)
    ctx.body = res2.data.me
  } catch (err) {
    console.log('error ', err)
    // eslint-disable-next-line require-atomic-updates
    ctx.body = err.toString()
  }
})

router.get('/logout', async (ctx) => {
  ctx.cookies.set('token', '')
  ctx.redirect('/')
})

export default router
