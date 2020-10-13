import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {

    return (
        <section className="header-bg">
            <div className="boxpart">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            </div>
            
        </section>
    );
};

export default Header;