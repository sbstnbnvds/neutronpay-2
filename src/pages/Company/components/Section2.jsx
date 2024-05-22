import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/company/section-2-company.png'

const Section2 = () => {
  return (
    <section className='company-section-1 eerie-black-background'>
      <Container>
        <Row className='flex-row-reverse mx-0 py-5 justify-content-evenly align-items-center gy-4'>
          <Col xl={6} lg={7}>

            <p className='fw-normal pe-5 fs-3 text-white'>Powered by the Bitcoin Lightning Network, we leverage cutting-edge technology to make this vision a reality. This innovation enables near-instant transactions, creating a financial ecosystem that operates in real time, anywhere.</p>
          </Col>
          <Col xl={6} lg={5}>
            <img src={backgroundImage} className='w-100 rounded-5' alt="" />
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Section2