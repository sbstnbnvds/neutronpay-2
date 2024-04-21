import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import backgroundImage from '../../../assets/images/company/section-4-company.png'

const Section4 = () => {
  return (
    <section className='company-section-4'>
      <Row className='flex-row-reverse w-100 px-5 mx-0 py-5 justify-content-evenly align-items-center eerie-black-background'>
        <Col xs={6}>
          
          <p className='fw-normal fs-3 text-white'>With Nuetronpay, the concept of money evolves. Currency is no longer a barrier but a bridge that connects people, businesses, and ideas. We aim to make your transactions as fluid as a conversation, transcending the hurdles of currency conversion, transaction fees, and time.</p>
        </Col>
        <Col xs={6}>
          <img src={backgroundImage} className='w-100 rounded-5' alt="" />
        </Col>
      </Row>
    </section>
  )
}

export default Section4