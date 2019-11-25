import React, { ChangeEvent } from 'react'
import Label from '@shared/components/atoms/Label'
import Styled from './styles'

interface FormControlProps {
  id?: string
  name?: string
  type?: string
  label: string
  value?: string | number
  error?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormControl: React.FC<FormControlProps> = ({
  id,
  name,
  type = 'text',
  label,
  value,
  error,
  onChange,
}) => (
  <Styled.FormControl>
    <Label modifiers={error ? 'error' : undefined}>{label}</Label>
    <Styled.Input
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      modifiers={error ? 'error' : undefined}
    />
  </Styled.FormControl>
)

export default FormControl
