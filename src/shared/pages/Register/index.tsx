import React from 'react'
import { Default } from '@shared/templates/Default'
import { Heading } from '@shared/components/atoms/Heading'
import { RegisterForm } from '@shared/components/organisms/RegisterForm'

const Register: React.FC = () => (
  <Default hasHeader={false} hasFooter={false}>
    <Heading>Register Account</Heading>
    <RegisterForm></RegisterForm>
  </Default>
)

export default Register
