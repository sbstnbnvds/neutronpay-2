import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
  return (
    <header id="business-banner" className='overflow-hidden w-100'>
      <Row className='pt-5 pb-5 mb-5 banner-main-row justify-content-center'>
        <Col xxl={7} lg={10} md={9} sm={12} className='pt-5 '>
          <Row className='pt-5 pb-5 mb-5'>

            <h1 className='text-capitalize display-1 fw-800 text-center px-5 mb-4'>
              Lightning the way forward for businesses
            </h1>
            <p className='fs-4 text-center'>Your business deserves a payment solution that's as global as your vision. Neutronpay API is your gateway to effortless, borderless payments, especially tailored for businesses aiming to tap into the emerging markets of Asia and South East Asia.</p>
          </Row>
        </Col>
      </Row>

    </header>
  )
}

export default Banner