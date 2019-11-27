import React, { InputHTMLAttributes } from 'react'
import { StyledInputGroup } from './styles/InputGroup'
import { StyledLabel } from './styles/Label'
import { StyledInput } from './styles/Input'

interface InputGroup extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  modifiers?: string
}

const InputGroup: React.FC<InputGroup> = (props) => {
  return (
    <StyledInputGroup modifiers={props.modifiers}>
      <StyledLabel modifiers={props.modifiers}>{props.label}</StyledLabel>
      <StyledInput {...props} modifiers={props.modifiers} />
    </StyledInputGroup>
  )
}

export { InputGroup }
