import styled, { css } from 'styled-components'
import { colors, fontSize } from '@shared/style'

const modifiers = {
  error: () => css`
    color: ${colors.error};
  `,
}

export interface StyledLabelProps {
  error?: boolean
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: inline-block;
  color: ${colors.grayDark};
  margin-bottom: 5px;
  font-size: ${fontSize.base};

  ${({ error }) => (error ? modifiers.error() : '')}
`

export { StyledLabel }
