import React from 'react';
import logo2 from '../../images/logo2.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Services">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#about-us">About us</Nav.Link>
                        <Nav.Link href="#contact">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    );
};
export default Header;