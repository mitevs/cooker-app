import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface DefaultProps {
    children?: JSX.Element 
}

const Default = ({ children }: DefaultProps) => {
    return <div>
        <Header></Header>
        <main>
            {children}
        </main>
        <Footer></Footer>
    </div>

}

export default Default;
