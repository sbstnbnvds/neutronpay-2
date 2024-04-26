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
    <section className='app-available-now py-5'>
      <Container>

        <h2 className='text-center text-capitalize grape-text display-2 fw-semibold'>Available now!</h2>
        <Row className='m-0 justify-content-center py-5 px-5'>
          {flags.map((flag, index) => <Col lg={2} md={3} sm={4} xs={12} key={index}>
            <img src={flag[1]} alt="" className='w-100 flag-app mb-3' />
            <p className='fs-4 text-center'>{flag[0]}</p>
          </Col>)}
        </Row>

        <Row className='m-0 justify-content-center'>
          <Col xs={4}>
            <Row className='w-100 align-items-center ps-2'>
              <Col xs={5} onClick={() => console.log('click test')}>
                <img className='w-100' src={Apple} alt="Download on the App Store" />
              </Col>
              <Col xs={6}>
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