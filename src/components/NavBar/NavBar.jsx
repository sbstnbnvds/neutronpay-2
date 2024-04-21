import React, { useEffect, useState } from 'react'
import './NavBar.css'

import { NavLink, useLocation } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Logo from './Logo'

const NavBar = () => {

  

  const tabsList = ["home", "business", "app", "blog", "company"]

  let location = useLocation();

  useEffect(() => {
    if (location.pathname == '/company') {
      console.log('company')
     } else {
      console.log('not company')
     }
  }, [location]);

  return (
    <Navbar expand='md'>
      <Container>
        <Navbar.Brand href="#">
          <Logo fill="black"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='align-items-stretch flex-column'>
          <Nav className='justify-content-around' id='basic-navbar-nav'>
            {tabsList.map((tab, index) => <NavLink 
            key={index} 
            role="button" 
            data-rr-ui-event-key="#" 
            tabIndex="0" 
            className='fw-800 nav-link text-capitalize' to={index === 0 ? '/' : `/${tab}`}>{tab}</NavLink>)}
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default NavBar