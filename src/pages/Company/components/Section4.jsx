import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/company/section-4-company.png'

const Section4 = () => {
  return (
    <section className='company-section-4 eerie-black-background'>
      <Container>
        <Row className='flex-row-reverse mx-0 py-5 justify-content-evenly align-items-center gy-4'>
          <Col xl={6} lg={7}>

            <p className='fw-normal fs-3 text-white'>With Neutronpay, the concept of money evolves. Currency is no longer a barrier but a bridge that connects people, businesses, and ideas. We aim to make your transactions as fluid as a conversation, transcending the hurdles of currency conversion, transaction fees, and time.</p>
          </Col>
          <Col xl={6} lg={5}>
            <img src={backgroundImage} className='w-100 rounded-5' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section4