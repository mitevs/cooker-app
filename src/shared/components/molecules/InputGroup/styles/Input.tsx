import styled, { css } from 'styled-components'
import Input from '@shared/components/atoms/Input'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { sizes } from '@shared/style'

const modifiers = {
  right: () => css`
    border-radius: ${sizes.borderRadius};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `,
}

const StyledInput = styled(Input)<{ modifiers?: string }>`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  ${applyStyleModifiers(modifiers)}
`

export default StyledInput
