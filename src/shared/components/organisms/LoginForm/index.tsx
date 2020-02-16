import axios from 'axios'
import React, { FC, useState, useContext, FormEvent } from 'react'
import { Redirect } from 'react-router'
import { FormControl } from '@shared/components/molecules/FormControl'
import { Button } from '@shared/components/atoms/Button'
import { Context } from '@shared/AppContext'

const LoginForm: FC = () => {
  const ctx = useContext<AppContext>(Context)

  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const [shouldRedirect, setShouldRedirect] = useState(false)

  const onSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    try {
      const res = await axios.post('/login', { ...user })
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
          <Button type="submit" buttonStyle="primary">
            Login
          </Button>
        </form>
      </React.Fragment>
    )
  }
}

export { LoginForm }
