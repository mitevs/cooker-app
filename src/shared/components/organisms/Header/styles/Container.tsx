import styled from 'styled-components'

const StyledDiv = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

export default StyledDiv
