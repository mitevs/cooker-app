import styled from 'styled-components'
import { colors, fontSize, sizes } from '@shared/style'

const StyledInput = styled.input`
  border: 1px solid ${colors.grayDark1};
  border-radius: ${sizes.borderRadius};
  background: ${colors.white};
  color: ${colors.grayDark};
  padding: ${sizes.basePadding};
  font-size: ${fontSize.base};
  box-sizing: border-box;
  outline: none;
  max-width: 100%;
`

export { StyledInput }
