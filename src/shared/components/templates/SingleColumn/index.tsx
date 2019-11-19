import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '@shared/components/organisms/Header';
import Footer from '@shared/components/organisms/Footer';

interface SingleColumnProps {
    hasHeader?: boolean
    hasFooter?: boolean
}

const StyledMain = styled.main`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
`

const SingleColumn: React.FC<SingleColumnProps> = ({
    children,
    hasHeader = true,
    hasFooter = true
}) => (
        <Fragment>
            {hasHeader ? <Header></Header> : null}
            <StyledMain>
                {children}
            </StyledMain>
            {hasFooter ? <Footer></Footer> : null}
        </Fragment>
    );

export default SingleColumn;
