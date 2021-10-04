import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const linkStyle= {
        fontWeight: "bold", 
        textDecoration: "none"   
    }
    return (
        <div className="header">
            <div>
                <img className="logo" src={logo} alt="" />
            </div>
            <div>
                <NavLink activeStyle={linkStyle} to="/home">Home</NavLink><br />
                <NavLink activeStyle={linkStyle} to="/about">About</NavLink><br />
                <NavLink activeStyle={linkStyle} to="/services">Services</NavLink><br />
                <NavLink activeStyle={linkStyle} to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;