import styled, { css } from 'styled-components'
import { colors } from '@shared/style'
import { Link } from 'react-router-dom'

const linkStyle = css`
  padding: 10px;
  color: ${colors.grayDark};
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &.active {
    color: red;
  }
`

const StyledRouterLink = styled(Link)`
  ${linkStyle}
`

const StyledLink = styled.a`
  ${linkStyle}
`

const StyledLinkPlaceholder = styled.span`
  ${linkStyle}
`

export { StyledRouterLink, StyledLink, StyledLinkPlaceholder }
