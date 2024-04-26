import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


import dottedTop from '../../../assets/images/dotted-top.svg'
import dottedBottom from '../../../assets/images/dotted-bottom.svg'

const Banner = () => {
  return (
    <section className="banner-company eerie-black-background py-5 position-relative w-100">
      <Container className='p-0 position-relative z-3'>
        <Row className='w-100 justify-content-center py-5'>
          <Col xs={10}>
            <p className='text-white text-center display-3 fw-800 mt-5 pt-5'>Our mission is to empower businesses and individuals</p>
            <p className='steel-pink-text text-center fs-4 fw-semibold px-3 mb-5 pb-5'>by enabling open global finance without borders using the Lightning Network</p>
          </Col>
        </Row>
      </Container>


      <Row className='w-100 justify-content-end position-absolute top-0 end-0 m-0' >
        <Col xs={8} className='m-0 p-0'>
          <img src={dottedTop} alt="" className='w-100 m-0 p-0' />
        </Col>
      </Row>
      <Row className='w-100 justify-content-start position-absolute bottom-0 start-0 m-0' >
        <Col xs={8} className='m-0 p-0'>
          <img src={dottedBottom} alt="" className='w-100 m-0 p-0' />
        </Col>
      </Row>
    </section>
  )
}

export default Banner