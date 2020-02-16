import React from 'react'
import { Heading } from '@shared/components/atoms/Heading'
import { Default } from '@shared/components/templates/Default'
import { LoginForm } from '@shared/components/organisms/LoginForm'

const Login: React.FC = () => (
  <Default hasHeader={false} hasFooter={false}>
    <Heading>Register Account</Heading>
    <LoginForm></LoginForm>
  </Default>
)

export default Login
