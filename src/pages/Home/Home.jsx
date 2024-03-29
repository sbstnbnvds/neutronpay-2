import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'


const Home = () => {
  return (
    <header id="home-banner" className='banner overflow-hidden w-100'>
      <Row className=''>
        <Col xxl={7} lg={8} md={9} sm={12} className='ps-5 pt-5'>
          <Row className='pt-5'>

            <h1 className='text-capitalize display-1 fw-800'>
              <span className="line">payments at </span>
              <span className="line">the speed of light</span>
            </h1>
            <p className='fs-2 grape-text'>Unlocking the power of Lightning Network</p>
          </Row>
        </Col>
      </Row>
    </header>
  )
}

export default Home