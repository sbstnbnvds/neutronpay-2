import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/company/section-3-company.png'

const Section3 = () => {
  return (
    <section className='company-section-3'>
      <Container>
        <Row className='w-100 px-5 mx-0 py-5 justify-content-evenly align-items-center gy-4'>
          <Col xl={6} lg={7}>
            <p className='fw-normal fs-3'>What sets us apart is our commitment to making Lightning accessible to everyone. Wheter you're a small business owner in rural Vietnam or a global enterprise based in New York, our  infrastructure is designed to cater to your specific needs, making global transactions feel local.</p>
          </Col>
          <Col xl={6} lg={5}>
            <img src={backgroundImage} className='w-100 rounded-5' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section3