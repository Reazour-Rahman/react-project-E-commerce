import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = (props) => {
    return (
        <div>
            <header>

            <div className="header-logo">
                <img src={logo} alt="" />
            </div>
            <nav className="menu">
                <div className="anchor-container">
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory Here</a>
                </div>
            </nav>

            </header>
        </div>
    );
};

export default Header;