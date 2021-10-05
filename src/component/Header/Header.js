import React from 'react';
import logo2 from '../../images/logo2.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Navbar  bg="dark" variant="dark" sticky="top" expand="lg">
            <div className="container" >
                <Navbar.Brand href="#home">
                <img src={logo2} width="70px" height="45px" alt="" />
                CREATIVE IT ZONE
            </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="m-auto">
                        <NavLink to="/home">Home</NavLink>  
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/about">About us</NavLink>
                        <NavLink to="/contact">Contact us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    );
};
export default Header;