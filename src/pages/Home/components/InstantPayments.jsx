import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/home/instant-payments.png'

const InstantPayments = () => {
  return (
    <section className='instant-payments-section'>
      <Container>
        <Row className='mx-0 py-5 justify-content-center align-items-center'>
          <Col lg={5} className='py-5 d-flex flex-column'>
            <h2 className='steel-pink-text text-capitalize fw-semibold display-5 me-auto steel-pink-to-grape-background gradient-text'>instant payments</h2>
            <p className='fw-normal fs-5'>Sending money should be as simple as sending a text. With our instant transactions, your business stays agile, and personal payments flow effortlessly.</p>
          </Col>
          <Col lg={7}
          className='d-flex justify-content-center'>
            <img src={backgroundImage} className='w-100' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default InstantPayments