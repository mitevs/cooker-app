import React from 'react'
import Headline from '@shared/components/atoms/Headline'
import SingleColumn from '@shared/components/templates/SingleColumn'
import RegisterForm from '@shared/components/organisms/RegisterForm'

const Register: React.FC = () => (
  <SingleColumn hasHeader={false} hasFooter={false}>
    <Headline>Register Account</Headline>
    <RegisterForm></RegisterForm>
  </SingleColumn>
)

export default Register
