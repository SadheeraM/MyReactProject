import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/global-styles.css';
import Panel from "./Panel";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Panel/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default MainLayout;
