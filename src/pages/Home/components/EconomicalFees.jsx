import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/home/economical-fees.png'
import graph from '../../../assets/images/home/economical-fees-graph.svg'


const EconomicalFees = () => {
  return (
    <section className='economical-fees-section eerie-black-background'>
      <Container
      className='my-3'>
        <Row className='w-100 px-5 mx-0 py-5 justify-content-center align-items-center'>
          <Col lg={6}>
            <h2 className='grape-text text-capitalize fw-semibold display-5'>economical fees</h2>
            <p className='fw-normal text-light mb-5'>Why pay more when you can pay less? Lightning Network operates with minimal fees, making it the smart choice for both bustling businesses and daily personal expenses.</p>

            <img
              src={graph}
              alt=""
              className='w-75 px-sm-5' />
          </Col>
          <Col
            xs={6}
            className='d-none d-lg-block'>
            <img src={backgroundImage} className='w-100 rounded-4' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EconomicalFees