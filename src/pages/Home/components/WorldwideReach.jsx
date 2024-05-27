import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import backgroundImage from '../../../assets/images/home/worldwide-reach.png';

import bitcoinB from '../../../assets/images/home/Bitcoin B Clash Grotesk.svg';
import icon3 from '../../../assets/images/home/message-icon-3.svg';


const WorldwideReach = () => {
  return (
    <section className='worldwide-reach-section'>
      <Container>

        <Row className='w-100 mx-0 py-5 justify-content-evenly align-items-center flex-row-reverse gy-3'>
          <Col md={4}>
            <h2 className='grape-text text-capitalize fw-semibold display-5 grape-to-steel-pink-background gradient-text'>worldwide reach</h2>
            <p className='fw-normal fs-5'>Connect globally with low fees and instant transactions. Perfect for any business, anywhere.</p>
          </Col>
          <Col md={8} className='position-relative px-1 d-flex flex-column align-items-center align-items-sm-start'>
            <img src={backgroundImage} className='rounded-4 w-75' alt="" />
            <Container className="text-box-1 position-absolute top-0 h-100 end-0 px-0">

              <Row className='mx-0 user-select-none pe-3 h-100 align-items-end justify-content-between d-none d-sm-flex flex-column'>
                <Col
                  xs={6}
                  md={6}
                  lg={5}
                  xl={4}
                  className='p-0 d-flex align-items-center my-sm-5'>
                  <Row className='m-0 bg-white shadow rounded-4 px-2 py-2 w-100 justify-content-end'>
                    <Col
                      sm={12}>
                      <p className='m-0 p-0 text-secondary lh-1 message-sup-text'>Jordan:</p>
                      <p className='p-0 m-0'>Hey Pat, I paid for the project in Bitcoin since it's surging. You should see it soon!</p>
                      <p className='text-end m-0 p-0 steel-pink-text fw-semibold lh-1'>$43.2</p>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={6}
                  md={6}
                  lg={5}
                  xl={4}
                  className='p-0 d-none d-lg-block align-items-center my-sm-5 '>
                  <Row className='m-0 bg-white shadow rounded-4 px-2 py-2 w-100'>
                    <Col
                      sm={12}>
                      <p className='m-0 p-0 text-secondary lh-1 message-sup-text'>Pat:</p>
                      <p className='p-0 m-0'>Got it! the app changed it to Dong instantly. Love how this works! &#128513;</p>
                      <p className='text-end m-0 p-0 fw-800 lh-1'><img src={bitcoinB} alt="" className='bitcoin-sign' /></p>
                    </Col>

                  </Row>
                </Col>
                <Col
                  xs={6}
                  md={6}
                  lg={5}
                  xl={4}
                  className='p-0 d-none d-xl-block align-items-center my-sm-5'>
                  <Row className='m-0 bg-white shadow rounded-4 px-2 py-2 w-100 align-items-center justify-content-between'>
                    <Col
                      sm={9}
                      md={10}
                      lg={9}
                      xl={10}
                      xxl={10}>
                      <p className='m-0 p-0 text-secondary lh-1 message-sup-text'>Jordan:</p>
                      <p className='p-0 m-0'>Makes collaboration smoother! &#128517;</p>
                      <p className='text-end m-0 p-0 grape-text fw-800 lh-1'>$43.2</p>
                    </Col>
                    <Col xs={2}
                      className='p-0 pe-2'
                    ><img src={icon3} alt="" className='w-100' /></Col>
                  </Row>
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