import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/home/economical-fees.png'


const EconomicalFees = () => {
  return (
    <section className='economical-fees-section eerie-black-background'>
      <Container>

        <Row className='w-100 px-5 mx-0 py-5 justify-content-evenly align-items-center'>
          <Col xs={5}>
            <h2 className='grape-text text-capitalize fw-semibold display-5'>economical fees</h2>
            <p className='fw-normal text-light pe-5'>Why pay more when you can pay less? Lightning Network operates with minimal fees, making it the smart choice for both bustling businesses and daily personal expenses.</p>
          </Col>
          <Col xs={5}>
            <img src={backgroundImage} className='w-100' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EconomicalFees