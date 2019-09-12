import React from 'react';
import styled from 'styled-components';
import { colors } from '@shared/style';
import NavLink from '@shared/components/atoms/NavLink';
import Nav from '@shared/components/molecules/Nav';

const StyledHeader = styled.header`
    background: ${colors.gray};
    border: 1px solid ${colors.grayDark1};
    color: ${colors.grayDark};

    .header-inner {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;

        &:after {
            content: "";
            display: block;
            clear: both;
        }
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="header-inner">
            <Nav>
                <NavLink to="/login">login</NavLink>
            </Nav>
        </div>
    </StyledHeader>
);

export default Header;
