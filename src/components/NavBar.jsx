import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/images/logo.svg'

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#">
          <img
            alt=''
            src={Logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='align-items-stretch flex-column'>
          <Nav className='justify-content-around' id='basic-navbar-nav'>

            <Nav.Link className='' href='#' active={false} >Business</Nav.Link>
            <Nav.Link className='' href='#' active={false}>App</Nav.Link>
            <Nav.Link className='' href='#' active={false}>Blog</Nav.Link>
            <Nav.Link className='' href='#' active={false}>Company</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default NavBar