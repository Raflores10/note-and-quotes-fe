import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div>
            <h1>Notes & Quotes</h1>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="logout">Logout</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;