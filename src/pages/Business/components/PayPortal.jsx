import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/business/pay-portal.png'
import listTick from '../../../assets/images/business/list-tick.svg'


const PayPortal = () => {
  return (
    <section className='pay-portal-section eerie-black-background'>
      <Container>
        <Row className='px-sm-5 mx-0 py-5 justify-content-center align-items-center'>
          <Col lg={6} className='px-3'>
            <h2 className='steel-pink-text text-capitalize fw-semibold display-5 mb-5 text-center mx-0'>Pay portal and plugins</h2>

            <ul className='fs-4 fw-normal ps-0 text-white'>
              <li className='mb-4 d-flex'>
                <img src={listTick} alt="" className='pe-4' />
                <p>
                  Leverage our Neutronpay portal.
                </p>
              </li>
              <li className='mb-4 d-flex'>
                <img src={listTick} alt="" className='pe-4' />
                <p>
                  Seamlessly integrate payments with our versatile plugins.
                </p>
              </li>
              <li className='mb-4 d-flex'>
                <img src={listTick} alt="" className='pe-4' />
                <p>
                  Customize your payment gateway.
                </p>

              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <img src={backgroundImage} className='w-100 rounded-3' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PayPortal