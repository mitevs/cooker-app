import React from 'react'
import { StyledList } from './styles/List'

const Nav: React.FC = ({ children }) => (
  <nav>
    {/* add nav left */}

    <StyledList modifiers="right">
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </StyledList>
  </nav>
)

export { Nav }
