import React from 'react'

export const AppContext = React.createContext<AppContext>({
  user: {} as User,
  setUser: () => false,
})
