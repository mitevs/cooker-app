import React, { useState, useContext, FormEvent } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import { FormControl } from '@shared/components/molecules/FormControl'
import { Button } from '@shared/components/atoms/Button'
import AppContext from '@shared/AppContext'

const Login: React.FC = () => {
  const ctx = useContext(AppContext) as AppContext

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    try {
      const res = await axios.post('/login', { ...user })
      console.log(res)
      ctx.setUser(res.data)
      setShouldRedirect(true)
    } catch (err) {
      console.log(err)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  if (shouldRedirect) {
    return <Redirect to="/" />
  } else {
    return (
      <React.Fragment>
        <h1>Login</h1>

        <form onSubmit={onSubmit} noValidate>
          <FormControl
            label="Username"
            name="username"
            value={user.username}
            onChange={onChange}
          />
          <FormControl
            label="Password"
            name="password"
            type="password"
            value={user.password}
            onChange={onChange}
          />
          <Button type="submit">Login</Button>
        </form>
      </React.Fragment>
    )
  }
}

export { Login }
