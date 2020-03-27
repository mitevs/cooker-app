import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import client from '@client/graphql/client'
import App from '@shared/App'
import StyleContext from 'isomorphic-style-loader/StyleContext'

const css: any[] = []
let insertedStyles: any[] = []
let timer

const insertCss = (...styles): Function => {
  const removeCss = styles.map((style) => css.unshift(style))

  if (timer) {
    clearTimeout(timer)
  }

  timer = setTimeout(() => {
    // inject all styles
    insertedStyles = css.map((style) => style._insertCss())
  }, 0)

  return () => insertedStyles.forEach((dispose) => dispose())
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
