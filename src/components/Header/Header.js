import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
                </div>
            </nav>

            </header>
        </div>
    );
};

export default Header;