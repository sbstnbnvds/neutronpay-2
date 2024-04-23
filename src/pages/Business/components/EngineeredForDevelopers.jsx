import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import backgroundImage from '../../../assets/images/business/engineered-for-developers.png'
import listTick from '../../../assets/images/business/list-tick.svg'


const EngineeredForDevelopers = () => {
  return (
    <section className='engineered-for-developers'>
      <Row className='w-100 px-5 mx-0 py-5 justify-content-center align-items-center flex-row-reverse'>
        <Col xs={6} className='px-3 d-flex flex-column'>
          <h2 className='grape-text text-capitalize fw-semibold display-5 mb-3 '>Engineered for developers</h2>

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
          <a href="#" className='align-self-center'>
            <Button className='text-capitalize rounded-5 grape-background border-0 transition-1'>Contact our API documents</Button>
          </a>
        </Col>
        <Col xs={6}>
          <img src={backgroundImage} className='w-100 rounded-5' alt="" />
        </Col>
      </Row>
    </section>
  )
}

export default EngineeredForDevelopers