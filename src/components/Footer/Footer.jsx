import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'

import Logo from '../Logo'

import facebookIcon from '../../assets/images/footer/facebook-icon.svg'
import telegramIcon from '../../assets/images/footer/telegram-icon.svg'
import discordIcon from '../../assets/images/footer/discord-icon.svg'
import xIcon from '../../assets/images/footer/x-icon.svg'
import linkedinIcon from '../../assets/images/footer/linkedin-icon.svg'
import youtubeIcon from '../../assets/images/footer/youtube-icon.svg'
import tiktokIcon from '../../assets/images/footer/tiktok-icon.svg'

const tabsList = ["business", "app", "blog", "company"]

const socialMedia = [
  ["facebook", facebookIcon, "https://www.facebook.com/Neutronpay/"],
  // ["telegram", telegramIcon, ""],
  // ["discord", discordIcon, ""],
  ["x", xIcon, "https://twitter.com/neutronpay"],
  ["linked in", linkedinIcon, "https://www.linkedin.com/company/neutronpay"],
  ["youtube", youtubeIcon, "https://www.youtube.com/channel/UCVR0DWNMQxrnE8lxEwNBKMw"],
  ["tik tok", tiktokIcon, "https://www.tiktok.com/@neutronpay"],
]

const Footer = () => {
  return (
    <section className='eerie-black-background text-light pt-3'>
      <Container>

        <Row className='mx-0 mb-4 px-0 pt-3'>
          <Col xs={12} md={6} className='mb-3'>
            <Col as={Logo} fill='white'></Col>
            <Row className='mx-0 mt-3 mb-2'>
              <p className='fs-6 mb-2'>Offices</p>
              <p className='fs-6 mb-2'>Canada: 170-442 Richards St, Vancouver BC, V6b 2za</p>
              <p className='fs-6 mb-2'>Vietnam: 62 Tran Quang Khai Street, Tan Dinh Ward, District 1, HCMC</p>
            </Row>
            {/* Login Button

            <Row className='mx-0'>
              <Col className='d-flex justify-content-center steel-pink-background col-auto rounded-5 text-decoration-none transition-1'
                as={Link}>
                <Row className='m-0 rounded-5 px-4 py-2 px-sm-4 py-1 text-white fs-5'>

                  Login
                </Row>
              </Col>
            </Row> */}
          </Col>
          <Col xs={12} md={6}>
            <Row className='mx-0 align-items-start'>
              <Col xs={12} md={4} xl={3} className='px-0 mb-4'>
                <Row className='mx-0'>
                  {tabsList.map((tab, index) => <Col as={Link} className='fs-6 text-decoration-none text-light px-0 mb-md-3 mb-xl-2 text-capitalize transition-1' xs={6} md={12} to={`/${tab}`} key={index}>{tab}</Col>)}
                  <Col as='a' className='fs-6 text-decoration-none text-light px-0 mb-md-3 mb-xl-2 text-capitalize transition-1' xs={6} md={12} href='https://contact.neutronpay.com/' target='_blank'>Contact us</Col>
                  <Col as='a' className='fs-6 text-decoration-none text-light px-0 mb-md-3 mb-xl-2 text-capitalize transition-1' xs={6} md={12} href='https://docs.neutronpay.com/?version=latest' target='_blank'>Developer</Col>
                </Row>
              </Col>
              <Col xs={12} md={8} xl={9} className=''>
                <div className='border border-white border-2 rounded-3 py-2 px-3 d-flex flex-column'>

                  <a className='fs-5 d-block pb-2 text-decoration-none text-light me-auto transition-1' href='https://support.neutronpay.com/' target='__blank'>FAQs</a>
                  <p className='fs-6'>Ask us anything about our brand and product, and get factual responses.</p>
                </div>
                <Row className='mx-0 mt-0 gy-4'>
                  {socialMedia.map((socialMedia, index) => <Col as='a' className='px-2 px-sm-3 px-md-0 px-lg-2 px-xl-0 me-3 me-xl-3 transition-1' xs={2} sm={2} md={2} xl={1} key={index} href={socialMedia[2]} target='_blank'>
                    <img src={socialMedia[1]} className='w-100' alt={socialMedia[0]} />

                  </Col>)}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='gy-4'>
          <Col xs={12} md={6} className='d-flex justify-content-between justify-content-md-start fs-6'>
            <Link className='text-decoration-none text-light me-md-3 me-lg-5 transition-1' to='/privacy-policy'>Privacy Policy</Link>
            <Link className='text-decoration-none text-light transition-1' to={'/terms-of-use'}>Terms of Use</Link>
          </Col>
          <Col xs={12} md={6} className='d-flex '>
            <p className='fs-6'>&#169; 2024 Neutronpay. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer