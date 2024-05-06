import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

import Logo from '../Logo'

const tabsList = ["business", "app", "blog", "company"]

const Footer = () => {
  return (
    <section className='eerie-black-background text-light pt-3'>
      <Container>

        <Row className='mx-0 mb-3 px-0 pt-3'>
          <Col xs={12} md={6} className='mb-3'>
            <Col as={Logo} fill='white'></Col>
            <Row className='mx-0 mt-3 mb-2'>
              <p className='fs-5 mb-2'>Offices</p>
              <p className='fs-5 mb-2'>Canada: 170-442 Richards St, Vancouver BC, V6b 2za</p>
              <p className='fs-5 mb-2'>Vietnam: 62 Tran Quang Khai Street, Tan Dinh Ward, District 1, HCMC</p>
            </Row>
            <Row className='mx-0'>
              <Col className='d-flex justify-content-center steel-pink-background col-auto rounded-5 text-decoration-none transition-1'
                as={Link}>
                <Row className='m-0 rounded-5 px-4 py-2 px-sm-4 py-1 text-white fs-5'>

                  Login
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row className='mx-0'>
              <Col xs={12} md={4} className='px-0 mb-4'>
                <Row className='mx-0'>
                  {tabsList.map( (tab, index ) => <Col as={Link} className='fs-4 text-decoration-none text-light px-0 mb-md-3 text-capitalize' xs={6} md={12} to={`/${tab}`} key={index}>{tab}</Col>)} 
                </Row>
              </Col>
              <Col xs={12} md={8} className='px-2 border border-white border-2 rounded-3 py-2 px-3'>
                <p className='fs-4'>FAQs</p>
                <p className='fs-4'>Ask us anything about our brand and product, and get factual responses.</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='gy-4'>
          <Col xs={12} md={6} className='d-flex justify-content-between justify-content-md-evenly'>
            <Link className='text-decoration-none text-light fs-4'>Privacy Policy</Link>
            <Link className='text-decoration-none text-light fs-4'>Terms of service</Link>
          </Col>
          <Col xs={12} md={6} className='d-flex '>
            <p className='fs-4'>&#169; 2024 Neutronpay. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer