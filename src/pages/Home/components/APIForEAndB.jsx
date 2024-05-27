import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import dottedBackground from '../../../assets/images/dotted-background.svg'


const APIForEAndB = () => {
  return (
    <section className='eerie-black-background pt-5 pb-0 position-relative overflow-hidden api-businesses-section'>
      <Container>

        <h2 className='display-5 text-uppercase fw-800 text-center z-3 position-relative steel-pink-text grape-to-steel-pink-background gradient-text'>API for Enterprises and Businesses</h2>
        <Row className='mx-0 pt-4 mb-0 justify-content-evenly z-3 position-relative'>
          <p className='text-white text-center fs-5'>The Neutronpay API enables enterprises and businesses to integrate fast payment processing seamlessly and securely. Built for scalability.</p>
        </Row>
        <Row className='mx-0 pt-1 pb-5 justify-content-evenly z-3 position-relative'>
          <Col xs={9} className='text-white text-center px-5 fs-4 d-flex justify-content-center'>
            <a href='https://contact.neutronpay.com/' target='__blank' className='rounded-5 contact-us-button steel-pink-to-grape-background transition-1 border-0 text-decoration-none text-white px-3 py-2 d-block'>Contact our experts</a>
          </Col>
        </Row>

        <Row className="mx-0 justify-content-center">
          <Col xxl={4} xl={5} lg={6} md={8} sm={10} xs={11} className='position-relative'>
            <img src={dottedBackground} className='w-100 position-absolute bottom-0 start-0' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default APIForEAndB