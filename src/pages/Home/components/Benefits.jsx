import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import sendIcon from '../../../assets/images/home/send-icon.svg';
import receiveIcon from '../../../assets/images/home/receive-icon.svg';
import rightArrow from '../../../assets/images/home/right-arrow.svg';


const Benefits = () => {

  const handleClick = () => {
    console.log('handleClick');
  };
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
                <Row className='pt-3'>
                  <h3 className='steel-pink-text text-capitalize mb-4'>send</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius aliquid nobis! Quisquam iusto aliquam dolores</p>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={4} lg={4} md={8} xs={12} className='px-sm-4 '>
            <Row className='h-100'>
              <Col xs={12} className='rounded-4 shadow benefits-card pt-5 px-4 pb-1 eerie-black-background text-white'>
                <Row className='mb-5 justify-content-between align-items-center'>
                  <Col xs={7}>
                    <h3 className='text-capitalize'>receive</h3>
                  </Col>
                  <Col xs={5}>
                    <img className='w-100 benefits-card-icon' src={receiveIcon} alt="" />
                  </Col>
                </Row>
                <Row className=''>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius aliquid nobis! Quisquam iusto aliquam dolores, nemo nisi libero asperiores</p>
                </Row>
                <Row onClick={handleClick} className='justify-content-between mt-5 learn-more-link cursor-pointer'>
                  <Col xs={6}>
                    <p className=''>Learn more...</p>
                  </Col>
                  <Col xxl={2} xl={2} lg={3} md={2} sm={2} xs={3} className='px-1 d-flex align-items-center'>
                    <img src={rightArrow} alt="" className='w-100 benefits-right-arrow' />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xl={4} lg={4} md={8} xs={12} className='px-sm-4 '>
            <Row className='h-100'>
              <Col xs={12} className='rounded-4 shadow benefits-card pt-5 pb-4 px-4 h-100'>
                <Row className='mb-5'>
                  <Col xs={3}>
                    <img className='benefits-card-icon' src={sendIcon} alt="" />
                  </Col>
                </Row>
                <Row>
                  <h3 className='steel-pink-text text-capitalize'>low cost</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eius aliquid nobis! Quisquam iusto aliquam dolores, nemo nisi libero asperiores</p>
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