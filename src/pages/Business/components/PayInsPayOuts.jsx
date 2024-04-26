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
        <Row className='mx-0 justify-content-center'>
          <Col
            lg={6}
            className='eerie-black-background rounded-4 text-center pb-5 px-'>
            <Row className='mx-0 justify-content-center'>
              <Col
              lg={2}
              md={1}
               xs={2}
               className='position-relative pt-5'>
                <img
                  src={payInsImage}
                  alt=""
                  className='position-absolute start-0 end-0 w-100 w-xl-75 bottom-0 card-bg-img' />
              </Col>


            </Row>
            <h3 className='steel-pink-text display-3 fw-semibold mt-5'>Pay-ins</h3>
            <p className='text-white fs-3'>Neutronpay simplifies turning local currency into Bitcoin for businesses, opening new markets, boosting income, and ensuring secure, straightforward growth.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PayInsPayOuts