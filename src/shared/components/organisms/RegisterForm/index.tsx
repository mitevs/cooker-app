import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Redirect } from 'react-router'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_USER } from '@shared/graphql/mutations/users'
import Button from '@shared/components/atoms/Button'
import FormControl from '@shared/components/molecules/FormControl'

const RegisterForm: React.FC = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  })

  const [errors, setError] = useState({
    username: '',
    password: '',
    email: '',
  })

  const [createUser] = useMutation(CREATE_USER)

  const isValidForm = (): boolean => {
    return !!(user.email && user.password && user.username)
  }

  const validateField = (name: string, value: string): void => {
    if (!value) {
      setError((prev) => ({ ...prev, [name]: 'Required' }))
    } else {
      setError((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const onSubmit = async (e: FormEvent): void => {
    e.preventDefault()

    try {
      await createUser({ variables: { ...user } })
      setShouldRedirect(true)
    } catch (err) {
      console.log('err ', err)
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    validateField(name, value)
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  if (shouldRedirect) {
    return <Redirect to="/login" />
  } else {
    return (
      <form onSubmit={onSubmit} noValidate>
        <FormControl
          label="Username"
          name="username"
          error={errors.email}
          onChange={onChange}
          value={user.username}
        />

        <FormControl
          label="Email"
          name="email"
          type="email"
          error={errors.email}
          onChange={onChange}
          value={user.email}
        />

        <FormControl
          label="Password"
          name="password"
          type="password"
          error={errors.password}
          onChange={onChange}
          value={user.password}
        />

        <Button disabled={!isValidForm()}>Register</Button>
      </form>
    )
  }
}

export default RegisterForm
