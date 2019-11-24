import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const modifiers = {
  right: () => css`
    float: right;
  `,
}

const StyledList = styled.ul<{ modifiers?: string | string[] }>`
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    display: inline-block;
  }

  ${applyStyleModifiers(modifiers)}
`

export default StyledList
