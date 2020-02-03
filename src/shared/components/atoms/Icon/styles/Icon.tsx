import styled, { css } from 'styled-components'

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
  pointer: () => css`
    &:hover svg {
      cursor: pointer;
    }
  `,
}

export interface StyledIconProps {
  size?: 'small' | 'big'
  pointer?: boolean
}

const StyledIcon = styled.i<StyledIconProps>`
  display: inline-block;
  position: relative;

  svg {
    width: 16px;
    height: 16px;
  }

  ${({ size = '' }) => (modifiers[size] ? modifiers[size]() : '')}
  ${({ pointer = false }) => (pointer ? modifiers.pointer() : '')}
`

export { StyledIcon }
