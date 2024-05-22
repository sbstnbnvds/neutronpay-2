import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/company/section-1-company.png'

const Section1 = () => {
  return (
    <section className='company-section-1'>
      <Container>
        <Row className=' mx-0 py-5 justify-content-evenly align-items-center gy-4'>
          <Col xl={6} lg={7}>

            <p className='fw-normal fs-3'>In a world more connected than ever, interactions shouldn't be confined by borders or timezones.</p>
            <p className='fw-normal fs-3'>We envision a future where money transcends geographical limits. Your money should move as freely and quickly as the information you share.</p>
          </Col>
          <Col xl={6} lg={5}>
            <img src={backgroundImage} className='w-100 rounded-5' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section1