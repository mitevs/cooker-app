import React from 'react'
import { Headline } from '@shared/components/atoms/Headline'
import { Default } from '@shared/components/templates/Default'
import { LoginForm } from '@shared/components/organisms/LoginForm'

const Login: React.FC = () => (
  <Default hasHeader={false} hasFooter={false}>
    <Headline>Register Account</Headline>
    <LoginForm></LoginForm>
  </Default>
)

export default Login
