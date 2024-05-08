import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/business/engineered-for-developers.svg'
import listTick from '../../../assets/images/business/list-tick.svg'


const EngineeredForDevelopers = () => {
  return (
    <section className='engineered-for-developers'>
      <Container>
        <Row className='px-sm-5 mx-0 py-5 justify-content-center align-items-center flex-row-reverse gy-5'>
          <Col lg={6} xxl={7} className='px-3 d-flex flex-column'>
            <h2 className='grape-text text-capitalize fw-semibold display-5 mb-3 text-center'>Engineered for developers</h2>

            <ul className='fs-4 fw-normal ps-0'>
              <li className='mb-3 d-flex'>
                <img src={listTick} alt="" className='pe-4' />
                <p>
                  Elevate your projects with our robust and user-friendly Lightning Network API.
                </p>
              </li>
              <li className='mb-3 d-flex'>
                <img src={listTick} alt="" className='pe-4' />
                <p>
                  Our API ensures smooth global transactions.
                </p>
              </li>
              <li className='mb-3 d-flex'>
                <img src={listTick} alt="" className='pe-4' />
                <p>
                  Utilize our specialized API designed with developers in mind
                </p>

              </li>
            </ul>
            <a href="https://docs.neutronpay.com/?version=latest" target='__blank' className='align-self-center'>
              <Button className='text-capitalize rounded-5 grape-background border-0 transition-1 text-capitalize'>API docs</Button>
            </a>
          </Col>
          <Col lg={6} xxl={5}>
            <img src={backgroundImage} className='w-100' alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EngineeredForDevelopers