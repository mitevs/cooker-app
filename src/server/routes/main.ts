import Router from 'koa-router'
import { ME } from '@shared/graphql/queries/users'
import client from '@server/graphql/client'
import axios from 'axios'

const router = new Router()

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

    // get user with token
    ctx.session.token = authToken
    ctx.session.user = res2.data.me
    ctx.body = ctx.session.user
  } catch (err) {
    console.log('error ', err)
    ctx.body = err.toString()
  }
})

router.get('/logout', async (ctx) => {
  ctx.session = null
  ctx.redirect('/')
})

export default router
