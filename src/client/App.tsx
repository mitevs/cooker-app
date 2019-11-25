import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import client from './graphql/client'
import App from '@shared/App'

const ClientApp: React.FC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App ctx={{ user: window.APP.USER, setUser: () => false }}></App>
    </ApolloProvider>
  </BrowserRouter>
)

export default ClientApp
