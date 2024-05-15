import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import sendIcon from '../../../assets/images/home/send-icon.svg';
import receiveIcon from '../../../assets/images/home/receive-icon.svg';
import lowCostIcon from '../../../assets/images/home/low-cost.svg';


const Benefits = () => {

  return (
    <section className="benefits-section pt-3 pb-5 position-relative z-3">
      <Container>

        <Row className='mx-0 px-sm-5 justify-content-center benefits-main-row gy-5'>
          <Col xl={4} lg={4} md={8} xs={12} className='px-sm-4 '>
            <Row className='h-100'>
              <Col xs={12} className='rounded-4 shadow benefits-card pt-5 pb-4 px-4 h-100'>
                <Row className='mb-5'>
                  <Col xl={3} lg={4} md={5} sm={3} xs={5}
                    className='d-flex justify-content-start'>
                    <img className='benefits-card-icon' src={sendIcon} alt="" />
                  </Col>
                </Row>
                <Row className=''>
                  <h3 className='steel-pink-text text-capitalize mb-4 steel-pink-to-grape-background gradient-text w-auto'>send</h3>
                  <p>Quickly send money internationally. Use Bitcoin or your local currency to make secure & fast transactions to anyone, anywhere.</p>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={4} lg={4} md={8} xs={12} className='px-sm-4 '>
            <Row className='h-100'>
              <Col xs={12} className='rounded-4 shadow benefits-card pt-5 px-4 pb-1 eerie-black-background text-white'>
                <Row className='justify-content-between align-items-center'>
                  <Col xs={5} className='d-flex justify-content-start mb-5'>
                    <img className='benefits-card-icon' src={receiveIcon} alt="" />
                  </Col>
                  <Col xs={12}>
                    <h3 className='text-capitalize mb-4'>receive</h3>
                  </Col>
                </Row>
                <Row className=''>
                  <p>Your business receives Bitcoin but it is instantly converted locally and ready to be withdrawn to a bank or mobile account</p>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={4} lg={4} md={8} xs={12} className='px-sm-4 '>
            <Row className='h-100'>
              <Col xs={12} className='rounded-4 shadow benefits-card pt-5 pb-4 px-4 h-100'>
                <Row className='mb-5'>
                  <Col xs={3}>
                    <img className='benefits-card-icon' src={lowCostIcon} alt="" />
                  </Col>
                </Row>
                <Row>
                  <h3 className='steel-pink-text text-capitalize mb-4 steel-pink-to-grape-background gradient-text w-auto'>low cost</h3>
                  <p>Enjoy lower costs compared to traditional global payment methods thanks to our use of Bitcoin's instant and final settlement.</p>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Benefits