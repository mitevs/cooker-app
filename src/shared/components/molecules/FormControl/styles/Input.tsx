import styled, { css } from 'styled-components'
import Input from '@shared/components/atoms/Input'
import {
  applyStyleModifiers,
  styleModifierPropTypes,
} from 'styled-components-modifiers'
import { colors } from '@shared/style'

const modifiers = {
  error: () => css`
    border-color: ${colors.error};
  `,
}

const StyledInput = styled(Input)<{ modifiers?: string }>`
  width: 100%;
  ${applyStyleModifiers(modifiers)}
`

export default StyledInput