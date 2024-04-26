import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import premiseIcon from '../../../assets/images/home/premise-icon.svg'
import microWorkersIcon from '../../../assets/images/home/microWorkers-icon.svg'
import dottedBackground from '../../../assets/images/home/dotted-background.svg'

const TrustedByBusinesses = () => {
  return (
    <section className='eerie-black-background pt-5 pb-3 position-relative overflow-hidden'>
      <h2 className='display-2 text-uppercase fw-800 text-center text-white z-3 position-relative'>trusted by businesses</h2>
      <Container>
        <Row className='w-100 pt-4 pb-4 justify-content-evenly z-3 position-relative'>
          <Col xs={12} md={4} className='text-white fw-bolder fs-3 text-center'>Trusted Partners</Col>
          <Col xs={5} md={2}>
            <img src={premiseIcon} className='w-75' alt="" />
          </Col>
          <Col xs={5} md={2}>
            <img src={microWorkersIcon} className='w-75' alt="" />
          </Col>
        </Row>
        <Row className="w-100 justify-content-center">
          <Col xs={4} className='position-relative'>
            <img src={dottedBackground} className='w-100 position-absolute dotted-background' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TrustedByBusinesses