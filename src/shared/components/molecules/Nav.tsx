import React from 'react';
import styled from 'styled-components';

export interface NavProps {
    children: React.ReactNode
}

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    li {
        display: inline-block;
    }

    &.nav-right {
        float: right;
    }
`;

const Nav: React.FC<NavProps> = props => (
    <nav>
        {/* add nav left */}

        <StyledList className="nav-right">
            {props.children}
        </StyledList>
    </nav>
)

export default Nav;
