import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
  return (
    <header id="business-banner">
      <Container className='pt-5'>
        <Row className='pt-5 mt-1 mb-1 banner-main-row mx-0 justify-content-center'>

              <h1 className='text-capitalize display-1 fw-800 text-center px-0 pt-5 mb-4 steel-pink-to-grape-background col-xl-10 col-xxl-9'>
                Lightning the way <br className='d-none d-sm-inline'/>forward for businesses
              </h1>
              <p className='fs-4 text-center'>Your business deserves a payment solution that's as global as your vision. Neutronpay API is your gateway to effortless, borderless payments, especially tailored for businesses aiming to tap into the emerging markets of Asia and South East Asia.</p>
        </Row>
      </Container>

    </header>
  )
}

export default Banner