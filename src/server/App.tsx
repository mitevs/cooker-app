import React from 'react'
import { Context } from 'koa'
import { StaticRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './graphql/client'
import App from '@shared/App'

interface AppProps {
  ctx: Context
}

const ServerApp: React.FC<AppProps> = ({ ctx }: AppProps) => (
  <StaticRouter location={ctx.request.url} context={ctx}>
    <ApolloProvider client={client}>
      <App ctx={{ user: ctx.state.user, setUser: () => false }}></App>
    </ApolloProvider>
  </StaticRouter>
)

export default ServerApp
