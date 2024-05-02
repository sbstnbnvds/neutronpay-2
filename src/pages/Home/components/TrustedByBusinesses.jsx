import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import premiseIcon from '../../../assets/images/home/premise-icon.svg'
import microWorkersIcon from '../../../assets/images/home/microWorkers-icon.svg'
import BitGoIcon from '../../../assets/images/home/BitGo-icon.svg'

import dottedBackground from '../../../assets/images/dotted-background.svg'

const TrustedByBusinesses = () => {
  return (
    <section className='eerie-black-background pt-5 position-relative overflow-y-hidden'>
      <h2 className='display-2 text-uppercase fw-800 text-center text-white position-relative z-3 px-3'>trusted by businesses</h2>
      <Container>
        <Row className='mx-0 pt-4 pb-5 justify-content-evenly z-3 position-relative align-items-center'>
          <Col
            xs={12}
            lg={7}
            xl={8}>
            <Row
              className='mx-0 justify-content-evenly justify-content-md-between justify-content-lg-evenly justify-content-xl-between gy-4 gy-xl-0 py-0 mt-0'>
              <Col xs={6} md={4} lg={5} xl={3} >
                <img src={premiseIcon} className='w-100' alt="" />
              </Col>
              <Col xs={6} md={4} lg={5} xl={3}>
                <img src={microWorkersIcon} className='w-100' alt="" />
              </Col>
              <Col xs={6} md={4} lg={5} xl={3}>
                <img src={BitGoIcon} className='w-100' alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mx-0 justify-content-center">
          <Col
            xs={12}
            md={9}
            lg={7}
            xl={5}
            xxl={5}
            className='position-relative'>
            <img src={dottedBackground} className='w-100 position-absolute bottom-0 start-0' alt="" />
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default TrustedByBusinesses