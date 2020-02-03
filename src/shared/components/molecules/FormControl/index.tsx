import React, { ChangeEvent } from 'react'
import { Label } from '@shared/components/atoms/Label'
import { StyledFormControl } from './styles/FormControl'
import { StyledInput } from './styles/Input'

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
  <StyledFormControl>
    <Label error={!!error}>{label}</Label>
    <StyledInput
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      error={!!error}
    />
  </StyledFormControl>
)

export { FormControl }
