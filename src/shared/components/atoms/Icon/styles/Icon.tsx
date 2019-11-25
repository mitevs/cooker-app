import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const modifiers = {
  small: () => css`
    svg {
      width: 8px;
      height: 8px;
    }
  `,
  big: () => css`
    svg {
      width: 32px;
      height: 32px;
    }
  `,
  point: () => css`
    &:hover svg {
      cursor: pointer;
    }
  `,
}

const StyledIcon = styled.i<{ modifiers?: string | string[] }>`
  display: inline-block;
  position: relative;

  svg {
    width: 16px;
    height: 16px;
  }

  ${applyStyleModifiers(modifiers)}
`

export default StyledIcon
