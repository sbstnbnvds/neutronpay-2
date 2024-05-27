import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/app/app-banner.png'
import Google from '../../../assets/images/google-play-badge.png'
import Apple from '../../../assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'

const Banner = () => {
  return (
    <section className='app-banner py-5'>
      <Container className='px-0'>
        <Row className='m-0 my-5 px-3 align-items-center gy-5'>
          <Col className='px-3' xl={7} lg={6} xs={12}>
            <h1 className='display-1 text-uppercase fw-800'>tap, pay, go</h1>

            <p className='steel-pink-text display-6 text-capitalize fw-medium steel-pink-to-grape-background gradient-text'>experience easy global payments, right from your pocket</p>
            <p className='fs-5'>Powered by the Lightning Network, we are a revolution in your pocket. Enjoy fast, secure payments for everyone.</p>
            <Row className='m-0 justify-content-around d-none d-lg-flex'>
              <Col lg={12} xl={9} md={10} sm={12} xs={9}>
                <Row className='mx-0 align-items-center ps-sm-5 gy-4'>
                  <Col sm={5} href='https://apps.apple.com/vn/app/neutronpay/id1629825080' target='_blank' as='a'>
                    <img className='w-100 px-3 px-sm-0' src={Apple} alt="Download on the App Store" />
                  </Col>
                  <Col sm={6} href='https://play.google.com/store/apps/details?id=neutronpay.wallet' target='_blank' as='a'>
                    <img className='w-100' src={Google} alt="Get it on Google Play" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={6} xl={5}>
            <img src={backgroundImage} alt="" className='w-100' />
          </Col>

        </Row>
        <Row className='m-0 justify-content-around d-lg-none'>
          <Col lg={12} xl={9} md={10} sm={12} xs={7}>
            <Row className='mx-0 align-items-center ps-sm-5 gy-4'>
              <Col sm={5} href='https://apps.apple.com/vn/app/neutronpay/id1629825080' target='_blank' as='a'>
                <img className='w-100 px-3 px-sm-0' src={Apple} alt="Download on the App Store" />
              </Col>
              <Col sm={6} href='https://play.google.com/store/apps/details?id=neutronpay.wallet' target='_blank' as='a'>
                <img className='w-100' src={Google} alt="Get it on Google Play" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner