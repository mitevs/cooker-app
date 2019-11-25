import React, { InputHTMLAttributes } from 'react'
import Styled from './styles'

interface InputGroup extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  modifiers?: string
}

const InputGroup: React.FC<InputGroup> = (props) => {
  return (
    <Styled.InputGroup modifiers={props.modifiers}>
      <Styled.Label modifiers={props.modifiers}>
        {props.label}
      </Styled.Label>
      <Styled.Input {...props} modifiers={props.modifiers} />
    </Styled.InputGroup>
  )
}

export default InputGroup
