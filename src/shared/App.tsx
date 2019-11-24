import React, { Fragment, useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { fontSize } from '@shared/style'
import routes from './routes'
import AppContext from './AppContext'

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: ${fontSize.base}
    }
`

const App: React.FC<{ ctx: AppContext }> = ({ ctx }) => {
  const [user, setUser] = useState(ctx.user)

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <GlobalStyle />
      <Switch>{renderRoutes(routes)}</Switch>
    </AppContext.Provider>
  )
}

export default App
