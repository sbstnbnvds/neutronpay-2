import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import payInsImage from '../../../assets/images/business/pay-ins.svg'
import payOutsImage from '../../../assets/images/business/pay-outs.svg'


const PayInsPayOuts = () => {


  return (
    <section className="pay-ins-outs-section pt-3 pb-5">
      <Container>
        <Row className='mx-0 justify-content-evenly gy-5 mt-2 flex-row-reverse'>
          <Col
            xxl={4}
            xl={5}
            lg={5}
            md={7}
            xs={11}
            className='rounded-4 text-center pb-5'>
            <Row className='mx-0 justify-content-center mt-2'>
              <Col
                lg={2}
                md={2}
                sm={2}
                xs={2}
                className='position-relative'>
                <img
                  src={payOutsImage}
                  alt=""
                  className='position-absolute start-0 w-100 top-0 translate-middle-y' />
              </Col>
            </Row>
            <h3 className='grape-text display-4 fw-semibold mt-5 pt-2'>Pay-outs</h3>
            <p className='text-black fs-4'>Neutronpay quickly changes Bitcoin into local currency, easing pauments, saving costs with competitive rates, and making global transactions secure and clear.</p>
          </Col>
          <Col
            xxl={4}
            xl={5}
            lg={5}
            md={7}
            xs={11}
            className='eerie-black-background rounded-4 text-center pb-5 mb-2'>
            <Row className='mx-0 justify-content-center'>
              <Col
                lg={2}
                md={2}
                sm={2}
                xs={2}
                className='position-relative'>
                <img
                  src={payInsImage}
                  alt=""
                  className='position-absolute start-0 w-100 top-0 translate-middle-y' />
              </Col>


            </Row>
            <h3 className='steel-pink-text display-4 fw-semibold mt-5 pt-2'>Pay-ins</h3>
            <p className='text-white fs-4'>Neutronpay simplifies turning local currency into Bitcoin for businesses, opening new markets, boosting income, and ensuring secure, straightforward growth.</p>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default PayInsPayOuts