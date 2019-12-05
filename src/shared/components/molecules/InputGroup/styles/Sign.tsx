import styled from 'styled-components'
import { colors, sizes } from '@shared/style'

const StyledSign = styled.span`
  background: ${colors.gray};
  text-align: center;
  border: 1px solid ${colors.grayDark1};
  border-right: 0;
  border-top-left-radius: ${sizes.borderRadius};
  border-bottom-left-radius: ${sizes.borderRadius};
  padding: ${sizes.basePadding} calc(${sizes.basePadding} * 2);
  margin: 0;
`

export { StyledSign }
