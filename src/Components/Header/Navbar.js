import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';
import logo from '../../photo/logo.png'
import './Navbar.css'
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="white" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img style={{ width: '3rem' }} src={logo} alt="logo" />  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link style={{ color: 'green' }} className='nav navbar-text' href="home#inventory">Inventory</Nav.Link> */}
                            {
                                user && <>
                                    <Nav.Link style={{ color: 'green' }} className='nav navbar-text' as={Link} to='/addInventory'>Add Inventory</Nav.Link>
                                    <Nav.Link style={{ color: 'green' }} className='nav navbar-text' as={Link} to='/manageInventory'>Manage all Inventories</Nav.Link>

                                </>
                            }


                        </Nav>
                        <Nav>
                            <Nav.Link style={{ color: 'green' }} className='nav navbar-text' as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='log-button' onClick={handleSignOut}>SignOut</button>
                                    :
                                    <Nav.Link className='log-button' as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;