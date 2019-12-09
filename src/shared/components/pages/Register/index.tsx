import React from 'react'
import { Headline } from '@shared/components/atoms/Headline'
import { Default } from '@shared/components/templates/Default'
import { RegisterForm } from '@shared/components/organisms/RegisterForm'

const Register: React.FC = () => (
  <Default hasHeader={false} hasFooter={false}>
    <Headline>Register Account</Headline>
    <RegisterForm></RegisterForm>
  </Default>
)

export default Register
