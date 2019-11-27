import styled from 'styled-components'
import { StyledIcon } from './Icon'

const StyledTimeGroup = styled.div`
  &:first-child {
    margin-right: 10px;
  }

  ${StyledIcon} {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    ${StyledIcon} {
      opacity: 1;
    }
  }
`

export { StyledTimeGroup }
