import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import backgroundImage from '../../../assets/images/app/app-banner.png'

const Banner = () => {
  return (
    <section className='app-banner py-5'>
      <Row className='m-0 my-5 py-5 px-5 align-items-center'>
        <Col className='px-3' lg={7} xs={12}>
          <h1 className='display-1 text-uppercase fw-800'>tap, pay, go</h1>

          <p className='steel-pink-text display-6 text-capitalize fw-medium'>experience easy global payments, right from your pocket</p>
          <p className='fs-5'>Neutronpay, powered by the Lightning Network, where managing your money is easier than ever. This isn't just an app; it's a revolution in your pocket. Our app is designed to make payments straightforward and stress-free. It's perfect for everyone, from business owners to streamers, freelancers, and everyday individuals.</p>
        </Col>
        <Col xs={12} lg={5}>
          <img src={backgroundImage} alt="" className='w-100'/>
        </Col>

      </Row>
    </section>
  )
}

export default Banner