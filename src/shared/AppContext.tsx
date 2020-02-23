import React from 'react'

export const Context = React.createContext<AppContext>({
  user: null,
  setUser: () => false,
})
