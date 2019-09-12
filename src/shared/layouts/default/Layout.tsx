import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Default: React.FC = ({ children }) => (
    <div>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
    </div>
);

export default Default;
