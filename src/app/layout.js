import React from 'react';
import LeftSidebar from '../componets/LeftSidebar/leftSidebar';
import Footer from './../componets/Footer/footer';

export default function Layout({ children }) {
    return (
        <>
            <LeftSidebar />
            {children}
            <Footer />
        </>
    );
}
