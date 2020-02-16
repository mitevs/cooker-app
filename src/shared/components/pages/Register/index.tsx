import React from 'react'
import { Heading } from '@shared/components/atoms/Heading'
import { Default } from '@shared/components/templates/Default'
import { RegisterForm } from '@shared/components/organisms/RegisterForm'

const Register: React.FC = () => (
  <Default hasHeader={false} hasFooter={false}>
    <Heading>Register Account</Heading>
    <RegisterForm></RegisterForm>
  </Default>
)

export default Register
