import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import backgroundImage from '../../../assets/images/home/worldwide-reach.png';


const WorldwideReach = () => {
  return (
    <section className='worldwide-reach-section'>
      <Container>

        <Row className='w-100 px-5 mx-0 py-5 justify-content-evenly align-items-center flex-row-reverse'>
          <Col sm={5}>
            <h2 className='steel-pink-text text-capitalize fw-semibold display-5'>worldwide reach</h2>
            <p className='fw-normal pe-5'>Why pay more when you can pay less? Lightning Network operates with minimal fees, making it the smart choice for both bustling businesses and daily personal expenses.</p>
          </Col>
          <Col sm={7} className='position-relative pe-3'>
            <img src={backgroundImage} className='' alt="" />
            <Container className="text-box-1 position-absolute top-0 h-100 end-0">

              <Row className='w-100 h-100 align-items-between justify-content-end'>
                <Col xs={5} className='p-0 d-flex align-items-center'>
                  <Row className='m-0 bg-white w-100 shadow rounded-4 px-3 py-2 align-items-center font-size-sm'>
                    <p className='p-0 m-0'>Lorem ipsum dolor sit, amet consectetur.</p>
                  </Row>
                </Col>
                <Col className='d-flex align-items-center' xs={12}>
                  {/* <Row className='bg-white w-100 shadow rounded-4 px-3 py-2'>
                    sdfsd
                  </Row>
                </Col>
                <Col className='d-flex align-items-center' xs={12}>
                <Row className='bg-white w-100 shadow rounded-4 px-3 py-2'>
                sdfsd
              </Row> */}
                </Col>
              </Row>

            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WorldwideReach