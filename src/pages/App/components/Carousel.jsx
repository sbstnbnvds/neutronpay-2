import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

import icon1 from '../../../assets/images/app/icon-1.png'
import icon2 from '../../../assets/images/app/icon-2.png'
import icon3 from '../../../assets/images/app/icon-3.png'
import icon4 from '../../../assets/images/app/icon-4.png'
import icon5 from '../../../assets/images/app/icon-5.png'


const AppCarousel = () => {
  return (
    <section className='mb-5'>
      <Row className='mx-0 justify-content-center'>
        <h2 className='text-capitalize w-auto display-3 fw-semibold'>Neutronpay Features</h2>
      </Row>
      <Container className='border border-4 border-black rounded-4 px-0 overflow-hidden'>
        <Carousel className='' indicators={false}>
          <Carousel.Item className='eerie-black-background p-4 text-white start-simplifying'>
            <h3 className='steel-pink-text text-center display-4 fw-semibold text-capitalize mb-3'>start simplifying</h3>
            <p className='text-center fs-5 mb-xl-4'>Neutronpay is more than a payment platform; it's a gateway to a world where payments are no longer boring. Start simplifying your life with Neutronpay today.</p>
            <div className="px-xl-5">
              <Row className='justify-content-between mx-0 mb-3 mb-xl-3 gy-3'>
                <Col
                  xl={4}
                  className='border border-5 rounded-4 border-black px-xl-3 py-xl-1 pb-xl-0 grape-background position-relative carousel-card'>
                  <Row className='mx-0'>
                    <Col xl={10}>
                      <h4 className='border-bottom border-black border-3 pb-1 mt-xl-4'>Businesses</h4>
                      <p>Send and receive payments internationally with ease, expanding your reach without the slow payment rails.</p>
                    </Col>

                  </Row><Row className='mx-0 justify-content-start position-absolute w-100 top-0 start-100'>
                    <Col xl={6} xs={1}>
                      <img src={icon1} alt="" className='w-100 translate-middle-x' />
                    </Col>
                  </Row>

                </Col>
                <Col
                  xl={5}
                  className='border border-5 rounded-4 border-black px-xl-3 py-xl-1 pb-xl-0 grape-background position-relative carousel-card'>
                  <Row className='mx-0'>
                    <Col xl={11}>
                      <h4 className='border-bottom border-black border-3 pb-1'>Merchants Retailers with Neutronpay POS Mode</h4>
                      <p className='lh-sm'>Wheter you're catering to local customers or accepting various global currencies, Neutronpay POS Mode simplifies transactions for a seamless retail experience.</p>
                    </Col>

                  </Row>
                  <Row className='mx-0 justify-content-start position-absolute w-100 top-0 start-100'>
                    <Col xl={4} xs={1}>
                      <img src={icon2} alt="" className='w-100 translate-middle-x' />
                    </Col>
                  </Row>

                </Col>
              </Row>
              <Row className='justify-content-center mx-0 mb-3 mb-xl-5'>
                <Col
                  xl={5}
                  className='border border-5 rounded-4 border-black px-xl-3 py-xl-1 pb-xl-4 grape-background position-relative carousel-card'>
                  <Row className='mx-0'>
                    <Col xl={12}>
                      <h4 className='border-bottom border-black border-3 pb-1 pt-xl-3'>Streamers & Content Creators</h4>
                      <p className='lh-sm'>Embrace LNURL for a hassle-free payment process. Connect with your global audience and receive payments effortlessly. Our platform removes the complexity typically associated with traditional platforms.</p>
                    </Col>
                  </Row>
                  <Row className='mx-0 justify-content-end position-absolute w-100 top-100 start-50 translate-middle'>
                    <Col xl={4} xs={1}>
                      <img src={icon3} alt="" className='w-100' />
                    </Col>
                  </Row>

                </Col>
              </Row>
              <Row className='justify-content-between mx-0 mb-3 mb-xl-3 gy-3'>
                <Col
                  xl={5}
                  className='border border-5 rounded-4 border-black px-xl-3 py-xl-1 pb-xl-0 grape-background position-relative carousel-card'>
                  <Row className='mx-0 justify-content-end'>
                    <Col xl={12}>
                      <Row className='mx-0 p-0 justify-content-end'>

                        <h4 className='border-bottom border-black border-3 pb-1 mt-xl-2 mx-0 ps-0'>Frelancers & Remote Workers</h4>
                        
                        <p className='lh-sm ps-xl-5'>Get paid for your work anywhere in the world, instantly and with minimal fees. Neutronpay ensures your hard work is rewarded without delay or high transaction costs.</p>
                        
                      </Row>
                    </Col>

                  </Row><Row className='mx-0 justify-content-start position-absolute w-100 bottom-0 start-0'>
                    <Col xl={4} xs={1}>
                      <img src={icon4} alt="" className='w-100 translate-middle-x' />
                    </Col>
                  </Row>

                </Col>
                <Col
                  xl={4}
                  className='border border-5 rounded-4 border-black px-xl-4 py-xl-1 pb-xl-0 grape-background position-relative carousel-card'>
                  <Row className='mx-0'>
                    <Col xl={12}>
                      <h4 className='border-bottom border-black border-3 pb-1 mt-xl-4'>Daily convenience</h4>
                      <p className='lh-sm'>Pay bills, split expenses with friends, or shop online - all made simple with Neutronpay.</p>
                    </Col>

                  </Row>
                  <Row className='mx-0 justify-content-end position-absolute w-100 top-100 start-50 translate-middle'>
                    <Col xl={5} xs={1}>
                      <img src={icon5} alt="" className='w-100' />
                    </Col>
                  </Row>

                </Col>
              </Row>
            </div>
          </Carousel.Item>
          {/* <Carousel.Item>
            Hola
          </Carousel.Item>
          <Carousel.Item>
            Hola
          </Carousel.Item> */}
        </Carousel>
      </Container>
    </section>
  )
}

export default AppCarousel