import React from 'react'
import styled, { css } from 'styled-components'
import Label from './Label'
import Input from './Input'
import { applyStyleModifiers } from 'styled-components-modifiers'

const modifiers = {
  right: () => css`
    ${Label} {
      order: 3;
    }
  `,
}

const StyledInputGroup = styled.div<{ modifiers?: string }>`
  display: flex;

  ${Label} {
    order: 1;
  }

  ${Input} {
    order: 2;
  }

  ${applyStyleModifiers(modifiers)}
`

export default StyledInputGroup
