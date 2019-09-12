import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '@shared/style';

const StyledHeader = styled.header`
    background: ${colors.gray};
    border: 1px solid ${colors.grayDark1};
    color: ${colors.grayDark};

    .header-inner {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
    }
`;

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    li {
        display: inline-block;
    }
`;

const StyledLink = styled(NavLink)`
    display: block;
    padding: 10px;
    color: ${colors.grayDark};
    text-decoration: none;

    &:hover, &.active {
        color: red;
    }
`;

const Header = () => {
    return <StyledHeader>
        <div className="header-inner">
            <nav>
                <StyledList>
                    <li>
                        <StyledLink to="/" activeClassName="active" exact>Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/profile" activeClassName="active">Profile</StyledLink>
                    </li>
                </StyledList>
            </nav>
        </div>
    </StyledHeader>
};

export default Header;
