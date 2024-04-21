import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import backgroundImage from '../../../assets/images/home/instant-payments.svg'

const InstantPayments = () => {
  return (
    <section className='instant-payments-section'>
      <Row className='w-100 px-5 mx-0 py-4 justify-content-evenly align-items-center'>
        <Col xs={5} className='py-5'>
          <h2 className='steel-pink-text text-capitalize fw-semibold display-5'>instant payments</h2>
          <p className='fw-medium'>Imagine sending money as easily as sending a text. That's what we offer - instant transactions that keep your business agile and your personal payments fluid</p>
        </Col>
        <Col xs={3}>
          <img src={backgroundImage} className='w-100' alt="" />
        </Col>
      </Row>
    </section>
  )
}

export default InstantPayments