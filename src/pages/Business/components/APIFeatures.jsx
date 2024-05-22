import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Feature1 from '../../../assets/images/business/api-features-1.svg'
import Feature2 from '../../../assets/images/business/api-features-2.svg'
import Feature3 from '../../../assets/images/business/api-features-3.svg'
import Feature4 from '../../../assets/images/business/api-features-4.svg'
import Feature5 from '../../../assets/images/business/api-features-5.svg'

const APIFeatures = () => {
  return (
    <section className='api-features-section eerie-black-background py-4'>
      <Container>

        <h2 className='text-center text-white text-uppercase display-1 fw-800 '>API features</h2>
        <Row className='mx-0 justify-content-center px-sm-5'>
          <Col xl={4} md={6} xs={12} className='text-white p-3'>
            <Col xs={12} className='api-features-card h-100 fs-5 rounded-3 p-4 align-items-center d-flex flex-column'>
              <Col xs={4} sm={2} className='my-3'>
                <img src={Feature1} alt="" className='w-100' />
              </Col>
              <Col xs={12} className='text-center'>
                <p className='fs-5'>Simplify global transactions with Neutronpay API—just as easy as local payments.</p>
              </Col>
            </Col>
          </Col>
          <Col xl={4} md={6} xs={12} className='text-white p-3'>
            <Col xs={12} className='api-features-card h-100 fs-5 rounded-3 p-4 align-items-center d-flex flex-column'>
              <Col xs={4} sm={2} className='my-3'>
                <img src={Feature2} alt="" className='w-100' />
              </Col>
              <Col xs={12} className='text-center'>
                <p className='fs-5'>Neutronpay API connects your business to growing economies with ease.</p>
              </Col>
            </Col>
          </Col>
          <Col xl={4} md={6} xs={12} className='text-white p-3'>
            <Col xs={12} className='api-features-card h-100 fs-5 rounded-3 p-4 align-items-center d-flex flex-column'>
              <Col xs={4} sm={2} className='my-3'>
                <img src={Feature3} alt="" className='w-75' />
              </Col>
              <Col xs={12} className='text-center'>
                <p className='fs-5'>Save time and money with Neutronpay: instant transactions, lower fees.</p>
              </Col>
            </Col>
          </Col>
          <Col xl={4} md={6} xs={12} className='text-white p-3'>
            <Col xs={12} className='api-features-card h-100 fs-5 rounded-3 p-4 align-items-center d-flex flex-column'>
              <Col xs={4} sm={2} className='my-3'>
                <img src={Feature4} alt="" className='w-100' />
              </Col>
              <Col xs={12} className='text-center'>
                <p className='fs-5'>Integrate our API smoothly into your system with minimal disruption.</p>
              </Col>
            </Col>
          </Col>
          <Col xl={4} md={6} xs={12} className='text-white p-3'>
            <Col xs={12} className='api-features-card h-100 fs-5 rounded-3 p-4 align-items-center d-flex flex-column'>
              <Col xs={4} sm={2} className='my-3'>
                <img src={Feature5} alt="" className='w-100' />
              </Col>
              <Col xs={12} className='text-center'>
                <p className='fs-5'>Handle multiple currencies effortlessly, eliminating conversion hassles.</p>
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default APIFeatures