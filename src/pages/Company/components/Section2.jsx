import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import backgroundImage from '../../../assets/images/company/section-2-company.png'

const Section2 = () => {
  return (
    <section className='company-section-2'>
      <Row className='flex-row-reverse w-100 px-5 mx-0 py-5 justify-content-evenly align-items-center eerie-black-background'>
        <Col xs={6}>
          
          <p className='fw-normal fs-3 text-white'>Powered by the Bitcoin Lightning Network, we believe in leveraging the best of emerging technologies to make this vision a reality. That's why we are harnessing the potential of the Lightning Network. This innovation enables near-instantaneous transactions, setting the foundation for a financial ecosystem that can operate in real - time, anywhere.</p>
        </Col>
        <Col xs={6}>
          <img src={backgroundImage} className='w-100 rounded-5' alt="" />
        </Col>
      </Row>
    </section>
  )
}

export default Section2