import React from 'react'
import { StyledInputGroup } from './styles/InputGroup'
import { StyledSign } from './styles/Sign'

const InputGroup: React.FC & { Sign: React.ComponentType } = ({ children }) => {
  return <StyledInputGroup>{children}</StyledInputGroup>
}

InputGroup.Sign = StyledSign

export { InputGroup }
