import React, { useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { fontSize } from '@shared/style'
import routes from './routes'
import Context from './AppContext'

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: ${fontSize.base}
    }
`

interface AppProps {
  ctx: AppContext
}

const App: React.FC<AppProps> = ({ ctx }) => {
  const [user, setUser] = useState(ctx.user)

  return (
    <Context.Provider value={{ user, setUser }}>
      <GlobalStyle />
      <Switch>{renderRoutes(routes)}</Switch>
    </Context.Provider>
  )
}

export default App
