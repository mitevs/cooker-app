import React, { useContext } from 'react';
import AppContext from '@shared/AppContext';
import Nav from '@shared/components/molecules/Nav';
import Link from '@shared/components/atoms/Link';
import Styled from './styles';

const Header = () => {
    const { user } = useContext(AppContext);

    return <Styled.Header>
        <Styled.Container>
            {user ?
                <Nav>
                    <Link to="/recipes">recipes</Link>
                    <Link to="/profile">profile</Link>
                    <Link href="/logout" >logout</Link>
                </Nav>
                :
                <Nav>
                    <Link to="/register">register</Link>
                    <Link to="/login">login</Link>
                </Nav>
            }
        </Styled.Container>
    </Styled.Header>
};

export default Header;
