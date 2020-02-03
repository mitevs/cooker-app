import styled, { css } from 'styled-components'
import { Input } from '@shared/components/atoms/Input'
import { colors } from '@shared/style'

const modifiers = {
  error: () => css`
    border-color: ${colors.error};
  `,
  block: () => css`
    width: 100%;
  `,
}

export interface StyledInputProps {
  error?: boolean
  block?: boolean
}

const StyledInput = styled(Input)<StyledInputProps>`
  width: 100%;

  ${({ error }) => (error ? modifiers.error() : '')}
  ${({ block }) => (block ? modifiers.block() : '')}
`

export { StyledInput }
