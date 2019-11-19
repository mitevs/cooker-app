import React, { Fragment } from 'react';
import Header from '@shared/components/organisms/Header';
import Footer from '@shared/components/organisms/Footer';

const TwoColumn: React.FC = ({ children }) => (
    <Fragment>
        <Header></Header>
        <main>
            {/* TODO, define 2 slots for rendering */}
            {children}
        </main>
        <Footer></Footer>
    </Fragment>
);

export default TwoColumn;
