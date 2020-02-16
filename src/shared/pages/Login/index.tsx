import React from 'react'
import { Default } from '@shared/templates/Default'
import { Heading } from '@shared/components/atoms/Heading'
import { LoginForm } from '@shared/components/organisms/LoginForm'

const Login: React.FC = () => (
  <Default hasHeader={false} hasFooter={false}>
    <Heading>Register Account</Heading>
    <LoginForm></LoginForm>
  </Default>
)

export default Login
