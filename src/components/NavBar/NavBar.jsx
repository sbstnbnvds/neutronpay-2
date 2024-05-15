import React, { useEffect, useState } from 'react'
import './NavBar.css'

import { NavLink, useLocation } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Logo from '../Logo'

const NavBar = () => {

  const [background, setBackground] = useState('')
  const [hidden, setHidden] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const tabsList = ["home", "business", "app", "blog", "company"]

  let location = useLocation();


  const delay = ms => new Promise(res => setTimeout(res, ms));
  useEffect(() => {
    if (location.pathname == '/company'
      || location.pathname == '/blog') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    async function testFunction() {
      if (!location.hash) {
  
        window.scrollTo(0, 0);
      } else {
        await delay(500);
        document.getElementById(location.hash.slice(1))?.scrollIntoView();
      }

    }

    testFunction()

    console.log(location)

    console.log("navbar location function")
  }, [location]);

  useEffect(() => {

    let prevScrollPos = window.scrollY;

    const handleScroll = () => {


      const currentScrollPos = window.scrollY;

      if (window.scrollY > 74) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      if (prevScrollPos > currentScrollPos) {
        setHidden(false);
      }

      prevScrollPos = currentScrollPos;
      if (window.scrollY > 90) {
        setBackground("glassmorphism");
      } else {
        setBackground("")
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (<>
    <Navbar
      expand='md'
      id='navbar'
      className={(hidden ? 'fixed-top hidden' : 'fixed-top') + ' ' + background + ' ' + (darkMode ? 'navbar-dark dark-mode-nav' : '')}
    >
      <Container>
        <Navbar.Brand href="#">
          <Logo fill={darkMode ? "white" : "black"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='align-items-stretch flex-column'>
          <Nav className='justify-content-around' id='basic-navbar-nav'>
            {tabsList.map((tab, index) => <NavLink
              key={index}
              role="button"
              data-rr-ui-event-key="#"
              tabIndex="0"
              className='fw-800 nav-link text-capitalize' to={index === 0 ? '/' : `/${tab}`}
            >{tab}</NavLink>)}
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>

  </>
  )
}

export default NavBar