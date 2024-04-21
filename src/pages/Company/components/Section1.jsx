import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import backgroundImage from '../../../assets/images/company/section-1-company.png'

const Section1 = () => {
  return (
    <section className='company-section-1'>
      <Row className='w-100 px-5 mx-0 py-5 justify-content-evenly align-items-center'>
        <Col xs={6}>
          
          <p className='fw-normal fs-3'>In a world that is more connected than ever, the way we interact with each other- especially when it comes to financial transactions- shouldn't be confined by borders or timezones</p>
          <p className='fw-normal fs-3'>At Neutronpay, we envision a future where the value of money transcends geographical limitations. Neutronpay embodies the belief that your money should move as quickly and freely as the information you share.</p>
        </Col>
        <Col xs={6}>
          <img src={backgroundImage} className='w-100 rounded-5' alt="" />
        </Col>
      </Row>
    </section>
  )
}

export default Section1