import React from 'react'

export const Context = React.createContext<AppContext>({
  setUser: () => false,
})
