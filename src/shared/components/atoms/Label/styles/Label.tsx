import styled, { css } from 'styled-components'
import { colors, fontSize } from '@shared/style'
import { applyStyleModifiers } from 'styled-components-modifiers'

const modifiers = {
  error: () => css`
    color: ${colors.error};
  `,
}

const StyledLabel = styled.label<{ modifiers?: string }>`
  display: inline-block;
  color: ${colors.grayDark};
  margin-bottom: 5px;
  font-size: ${fontSize.base};
  ${applyStyleModifiers(modifiers)}
`

export default StyledLabel
