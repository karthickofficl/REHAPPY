import React from 'react'
import "D:/React/frontend/src/Styles/Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const ListHeader = () => {
  return (
    <div className='Header-main'>
       <Navbar sticky="top" expand='lg'>
        <Container >
        <Navbar.Brand href="#home">REHABPY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Location</Nav.Link>
            <Nav.Link href="#pricing">Conditions</Nav.Link>
            <Nav.Link href="#pricing">Learning</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default ListHeader


