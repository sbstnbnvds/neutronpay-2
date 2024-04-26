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


        <h2 className='text-center fw-800 display-3 position-relative z-2 mb-5'>Your World in Your Hand</h2>
        {/* <p className='text-center fs-1 fw-800 grape-text position-relative z-2'>We're available in Canada, Vietnam and Thailand... for now!</p> */}
        <Row className='w-100 m-0 justify-content-around align-items-center position-relative z-2'>
          <Col xs={4}>
            <Row className='w-100 align-items-center'>
              <Col xs={5} onClick={() => console.log('click test')}>
                <img className='w-100' src={Apple} alt="Download on the App Store" />
              </Col>
              <Col xs={6}>
                <img className='w-100' src={Google} alt="Get it on Google Play" />
              </Col>
            </Row>
          </Col>
          <Col xs={3} className=''>
            <img className='w-100 px-1' src={Phone} alt="" />
          </Col>

        </Row>
        <Row className="w-100 justify-content-center">
          <Col xs={7} className='position-relative justify-content-center d-flex'>
            <img src={dottedBackground} className='w-50 position-absolute world-hands-map opacity-25' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default YourWorldInYourHands