import React, { useContext } from 'react'
import AppContext from '@shared/AppContext'
import { Nav } from '@shared/components/molecules/Nav'
import { Link } from '@shared/components/atoms/Link'
import { StyledHeader } from './styles/Header'
import { StyledContainer } from './styles/Container'

const Header: React.FC = () => {
  const { user } = useContext(AppContext)

  return (
    <StyledHeader>
      <StyledContainer>
        {user ? (
          <Nav>
            <Link to="/recipes">recipes</Link>
            <Link to="/profile">profile</Link>
            <Link href="/logout">logout</Link>
          </Nav>
        ) : (
          <Nav>
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
          </Nav>
        )}
      </StyledContainer>
    </StyledHeader>
  )
}

export { Header }
