import React from 'react';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Header;