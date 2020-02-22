import React, { useState } from 'react'
import { ErrorBoundary } from './Error'
import { renderRoutes } from 'react-router-config'
import { Switch } from 'react-router-dom'
import routes from './routes'
import { Context } from './AppContext'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from '@shared/styles/global.scss'

interface AppProps {
  ctx: AppContext
}

const App: React.FC<AppProps> = ({ ctx }) => {
  useStyles(styles)

  const [user, setUser] = useState(ctx.user)

  return (
    <Context.Provider value={{ user, setUser }}>
      <ErrorBoundary>
        <Switch>{renderRoutes(routes)}</Switch>
      </ErrorBoundary>
    </Context.Provider>
  )
}

export default App
