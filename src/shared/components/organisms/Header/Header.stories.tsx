import React from 'react'
import { storiesOf } from '@storybook/react'
import { Context } from '@shared/AppContext'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '.'

const stories = storiesOf('Organisms|Header', module)

stories
  .add('Default', () => {
    return (
      <BrowserRouter>
        <Context.Provider value={{ setUser: () => false }}>
          <Header></Header>
        </Context.Provider>
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
        <Context.Provider value={{ user, setUser: () => false }}>
          <Header></Header>
        </Context.Provider>
      </BrowserRouter>
    )
  })
