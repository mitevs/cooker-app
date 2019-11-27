import React from 'react'
import { storiesOf } from '@storybook/react'
import AppContext from '@shared/AppContext'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '.'

const stories = storiesOf('Organisms|Header', module)

stories
  .add('Default', () => {
    return (
      <BrowserRouter>
        <AppContext.Provider value={{ setUser: () => false }}>
          <Header></Header>
        </AppContext.Provider>
      </BrowserRouter>
    )
  })
  .add('Logged In User', () => {
    const user: User = {
      id: '123',
      username: 'stefo',
      email: 'stefomitev@gmail.com',
      shortBio: 'stefo short bio',
    }

    return (
      <BrowserRouter>
        <AppContext.Provider value={{ user, setUser: () => false }}>
          <Header></Header>
        </AppContext.Provider>
      </BrowserRouter>
    )
  })
