import styled, { css } from 'styled-components'

const modifiers = {
  right: () => css`
    float: right;
  `,
}

export interface StyledListProps {
  right?: boolean
}

const StyledList = styled.ul<StyledListProps>`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: inline-block;
  }

  ${({ right }) => (right ? modifiers.right() : '')}
`

export { StyledList }
