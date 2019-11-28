import React from 'react'
import { Headline } from '@shared/components/atoms/Headline'
import { SingleColumn } from '@shared/components/templates/SingleColumn'
import { LoginForm } from '@shared/components/organisms/LoginForm'

const Login: React.FC = () => (
  <SingleColumn hasHeader={false} hasFooter={false}>
    <Headline>Register Account</Headline>
    <LoginForm></LoginForm>
  </SingleColumn>
)

export default Login
