import React from 'react';
import styled from 'styled-components';
import { NavLink as ReactNavLink, NavLinkProps } from 'react-router-dom';
import { colors } from '@shared/style';

const StyledNavLink = styled(ReactNavLink)`
    display: block;
    padding: 10px;
    color: ${colors.grayDark};
    text-decoration: none;

    &:hover, &.active {
        color: red;
    }
`;

const NavLink: React.FC<NavLinkProps> = props => (
    <li>
        <StyledNavLink {...props}></StyledNavLink>
    </li>
)

export default NavLink;
