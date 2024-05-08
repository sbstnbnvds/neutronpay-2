import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Phone from '../../../assets/images/home/worldinhands.png'
import Google from '../../../assets/images/google-play-badge.png'
import Apple from '../../../assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'

import dottedBackground from '../../../assets/images/home/worldinhands-map.svg'


const YourWorldInYourHands = () => {
  return (
    <section className='world-in-hands-section pt-5'>
      <Container>


        <h2 className='text-center fw-800 display-3 position-relative z-2 mb-1'>Your World in Your Hand</h2>
        <Row className='m-0 gy-4 justify-content-around align-items-center position-relative z-2 flow-row-reverse'>
          
          <Col md={6} xs={12}>
            <Row className='mx-0 align-items-center justify-content-between'>
              <Col xs={5} href='https://apps.apple.com/vn/app/neutronpay/id1629825080' target='_blank' as='a'>
                <img className='w-100' src={Apple} alt="Download on the App Store" />
              </Col>
              <Col xs={6} href='https://play.google.com/store/apps/details?id=neutronpay.wallet' target='_blank' as='a'>
                <img className='w-100' src={Google} alt="Get it on Google Play" />
              </Col>
            </Row>
          </Col>
          <Col md={5} xs={8} className=''>
            <img className='w-100 px-1' src={Phone} alt="" />
          </Col>
        </Row>
        <Row className="w-100 justify-content-center">
          <Col xs={12} className='position-relative justify-content-start justify-content-md-center d-flex'>
            <img src={dottedBackground} className='w-50 position-absolute world-hands-map opacity-25' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default YourWorldInYourHands