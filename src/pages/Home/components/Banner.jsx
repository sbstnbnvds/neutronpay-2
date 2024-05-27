import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

import background from '../../../assets/images/home/banner-bg.png'
import Benefits from './Benefits';

const Banner = () => {
  return (
    <header id="home-banner" className='overflow-x-hidden pt-5'>
      <Container
        className='pt-5'>
        <Row className='pt-5 pb-2 mx-0 banner-main-row align-items-stretch justify-content-center'>
          <Col xxl={6} xl={7} lg={8} md={10} className='home-banner-text p-0'>

            <h1 className='text-capitalize display-2 fw-800'>Payments at <br className='d-none' /> the speed of light
            </h1>
            <p className='fs-2 steel-pink-text'>Unlocking the power of the Lightning Network</p>
          </Col>
          <Col xxl={6} xl={5} lg={4} md={9} sm={12}
            className='position-relative align-items-center overflow-visible home-banner-img-container z-1'>
            <img
              className='position-absolute z-1' id='home-banner-image'
              src={background}
              alt="" />
          </Col>
        </Row>

      </Container>
      <Benefits />
    </header>
  )
}

export default Banner