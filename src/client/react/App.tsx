import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import client from '@client/graphql/client'
import App from '@shared/App'
import StyleContext from 'isomorphic-style-loader/StyleContext'

const insertCss = (...styles): Function => {
  const removeCss = styles.map((style) => style._insertCss())
  return () => removeCss.forEach((dispose) => dispose())
}

const ClientApp: React.FC = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <StyleContext.Provider value={{ insertCss }}>
        <App ctx={{ user: window.APP.USER, setUser: () => false }}></App>
      </StyleContext.Provider>
    </ApolloProvider>
  </BrowserRouter>
)

export default ClientApp
