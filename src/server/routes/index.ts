import combineRouters from 'koa-combine-routers'
import mainRoutes from './main'
import reactRoutes from './react'

export default combineRouters(mainRoutes, reactRoutes as any)
