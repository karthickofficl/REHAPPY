import React from 'react'
import "../../Styles/Header.css"
import { Search } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../../Image/Frame.png'

const Header = () => {
  return (
    <div className='Header-main'>
       <Navbar sticky="top" expand='lg'>
        <Container>
        <Navbar.Brand href="#home">REHABPY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <span className='navImg'>
           <Nav className="" >
          <img src={Menu} alt='menu'/>
           </Nav>
            <Nav className="me-auto" >
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Location</Nav.Link>
            <Nav.Link href="#pricing">Conditions</Nav.Link>
            <Nav.Link href="#pricing">Learning</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link><Search/></Nav.Link>
          </Nav>
          </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

// {/* <div className='Header-container'>
// <div className='Header-title'>
//     <h1>REHABPY</h1>
// </div>
// <div className='Header-content'>
//     <div className='Header-page'>About</div>
//     <div className='Header-page'>Location</div>
//     <div className='Header-page'>Conditions</div>
//     <div className='Header-page'>Learning</div>
//     <div className='Header-page'>Contact us</div>
//     <div className='Header-page'>
//       <Search/>
//     </div>
// </div>
// </div> */}
