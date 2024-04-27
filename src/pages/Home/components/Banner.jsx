import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

import background from '../../../assets/images/home/banner-bg.png'

const Banner = () => {
  return (
    <header id="home-banner" className='w-100 overflow-hidden'>
      <Container
        className=''>

        <Row className='pt-5 pb-5 mb-5 mx-0 banner-main-row align-items-center justify-content-center'>
          <Col xxl={7} lg={8} className='ps-5 pt-5 home-banner-text'>
            <Row className='pt-5 pb-5 mb-5 mx-0'>

              <h1 className='text-capitalize display-1 fw-800'>
                <span className="line">payments at </span>
                <span className="line">the speed of light</span>
              </h1>
              <p className='fs-2 steel-pink-text'>Unlocking the power of Lightning Network</p>
            </Row>
          </Col>
          <Col xxl={5} lg={4} md={3} sm={12}
            className='position-relative align-items-center overflow-visible home-banner-img-container'>
            <img
              className='' id='home-banner-image'
              src={background}
              alt="" />
          </Col>
        </Row>

      </Container>
    </header>
  )
}

export default Banner