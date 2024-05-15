import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


import CanadaFlag from '../../../assets/images/app/flags/Canada.svg'
import IndonesiaFlag from '../../../assets/images/app/flags/Indonesia.svg'
import MalaysiaFlag from '../../../assets/images/app/flags/Malaysia.svg'
import PhilippinesFlag from '../../../assets/images/app/flags/Philippines.svg'
import ThailandFlag from '../../../assets/images/app/flags/Thailand.svg'
import VietnamFlag from '../../../assets/images/app/flags/Vietnam.svg'

import Google from '../../../assets/images/google-play-badge.png'
import Apple from '../../../assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'

const AvailableNow = () => {

  const flags = [
    ['Canada', CanadaFlag],
    ['Indonesia', IndonesiaFlag],
    ['Malaysia', MalaysiaFlag],
    ['Philippines', PhilippinesFlag],
    ['Thailand', ThailandFlag],
    ['Vietnam', VietnamFlag],
  ]


  return (
    <section className='app-available-now py-5' id='available-now'>
      <Container className='d-flex flex-column align-items-center'>

        <h2 className='text-center text-capitalize grape-text display-2 fw-semibold grape-to-steel-pink-background gradient-text'>Available now!</h2>
        <Row className='m-0 justify-content-center justify-content-sm-evenly py-5 px-md-2'>
          {flags.map((flag, index) => <Col lg={1} md={2} sm={3} xs={4} className='px-sm-1 d-flex flex-column align-items-center mx-3 mx-sm-4' key={index}>
            <img src={flag[1]} alt="" className='w-100 flag-app mb-3' />
            <p className='fs-5 text-center'>{flag[0]}</p>
          </Col>)}
        </Row>

        <Row className='m-0 justify-content-center'>
          <Col lg={6} sm={10} xs={8}>
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

export default AvailableNow