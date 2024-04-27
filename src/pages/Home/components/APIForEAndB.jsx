import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import premiseIcon from '../../../assets/images/home/premise-icon.svg'
import microWorkersIcon from '../../../assets/images/home/microWorkers-icon.svg'
import dottedBackground from '../../../assets/images/home/dotted-background.svg'


const APIForEAndB = () => {
  return (
    <section className='eerie-black-background pt-5 pb-0 position-relative overflow-hidden api-businesses-section'>
      <Container>

        <h2 className='display-5 text-uppercase fw-800 text-center z-3 position-relative steel-pink-text'>API for Enterprises and Businesses</h2>
        <Row className='mx-0 pt-4 mb-0 justify-content-evenly z-3 position-relative'>
          <p className='text-white text-center fs-6'>Neutron API is a powerful gateway designed for enterprises and businesses seeking to integrate lightning-fast payment solutions into their existing systems. Our API is engineered to provide a seamless, secure, and scalable payment experience, tailored to meet the diverse needs of today's businesses.</p>
        </Row>
        <Row className='w-100 pt-1 pb-5 justify-content-evenly z-3 position-relative'>
          <Col xs={9} className='text-white text-center px-5 fs-4'>
            <Button className='rounded-5 contact-us-button steel-pink-to-grape-background transition-1 border-0'>Contact our experts</Button>
          </Col>
        </Row>

        <Row className="w-100 justify-content-center">
          <Col xxl={4} lg={5} sm={8} xs={10} className='position-relative'>
            <img src={dottedBackground} className='w-100 position-absolute dotted-background' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default APIForEAndB