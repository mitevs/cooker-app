import React from 'react'
import styled from 'styled-components'

const StyledTwoColumn = styled.div`
  display: grid;
  grid-column-gap: 15px;
  grid-template-columns: 1fr 1fr;
`

const LeftColumn: React.FC = ({ children }) => <div>{children}</div>
const RightColumn: React.FC = ({ children }) => <div>{children}</div>

const TwoColumn: React.FC & {
  Left: React.FunctionComponent
  Right: React.FunctionComponent
} = ({ children }) => <StyledTwoColumn>{children}</StyledTwoColumn>

TwoColumn.Left = LeftColumn
TwoColumn.Right = RightColumn

export { TwoColumn }
