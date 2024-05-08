import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

import prevIcon from '../../../assets/images/app/prev-icon.svg'
import nextIcon from '../../../assets/images/app/next-icon.svg'

import icon1 from '../../../assets/images/app/icon-1.png'
import icon2 from '../../../assets/images/app/icon-2.png'
import icon3 from '../../../assets/images/app/icon-3.png'
import icon4 from '../../../assets/images/app/icon-4.png'
import icon5 from '../../../assets/images/app/icon-5.png'

import LNURLAdvanceImage from '../../../assets/images/app/LNURL-Advance.png'
import sendCashImage from '../../../assets/images/app/send-cash.png'

const prevButton = <img src={prevIcon} className='w-100 px-2 pb-0 pt-5 pb-sm-0 px-sm-3 px-md-4 px-lg-5'></img>
const nextButton = <img src={nextIcon} className='w-100 px-2 pb-0 pt-5 pb-sm-0 px-sm-3 px-md-4 px-lg-5'></img>


const secondSlideContent = [
  {
    icon: icon1,
    paragraph: "LNURL integration streamlines your payment processes on the Lightning Network. This feature is a boon for digital entrepreneurs, content creators, and anyone immersed in the online ecosystem, offering a level of efficiency and simplicity that transforms how you handle digital transactions."
  },
  {
    icon: icon2,
    paragraph: "Benefit from the added security and versatility of on-chain Bitcoin transactions. This feature offers an extra layer of reliability for all your financial activities."
  },
  {
    icon: icon3,
    paragraph: "Customize  your very own Lightning Network (LN) Address connected to your Neutronpay app account! Imagine crafting a unique digital name that's all yours"
  },
]

const thirdSlideContent = [
  {
    icon: icon1,
    paragraph: "Experience the speed of lightning with transfers that are almost instantantenous, no matter where you are sending your money."
  },
  {
    icon: icon2,
    paragraph: "Send money directly to bank accounts worldwide, eliminating the need for intermediaries or additional steps."
  },
  {
    icon: icon3,
    paragraph: "Access this feature through the Neutronpay app, making global money transfers as convenient as sending an instant message."
  },
]


const AppCarousel = () => {
  return (
    <section className='mb-5'>
      <Row className='mx-0 justify-content-center'>
        <h2 className='text-capitalize w-auto display-3 fw-semibold grape-text mb-5'>Neutronpay Features</h2>
      </Row>
      <Container className='border border-4 border-black rounded-4 px-0 overflow-hidden'>
        <Carousel className='' indicators={false} interval={null} prevIcon={prevButton} nextIcon={nextButton}>
          <Carousel.Item className='neutronpay-send-cash'>
            <Row className='mx-0 py-5 py-md-0 justify-content-end position-relative'>
              <Col className='d-md-none'>
                <div className="ps-3">
                  <h3 className='text-capitalize display-3 pe-5 mb-5 mb-md-4 mb-xl-5 mb-xxl-4 fw-semibold'>Neutronpay's <br />send cash</h3>
                  <Col
                    xs={12}
                    lg={10}
                    as='ul'
                    className='fs-3 ps-0'
                  >
                    {thirdSlideContent.map((listItem, key) => <li className='mb-4 mb-md-3 mb-lg-4 mb-xl-5 d-flex align-items-center' key={key}>
                      <Col as='img' xs={2} lg={2} xl={2} xxl={1} src={listItem.icon} alt='' className='me-2 me-md-0 me-lg-0 me-xl-1  me-xxl-3 px-0 px-sm-2 px-lg-3 px-xl-4 px-xxl-0' />
                      <p className='fs-5 lh-sm pe-4 pe-lg-5 pe-xl-4 mb-xxl-0'>
                        {listItem.paragraph}
                      </p>

                    </li>)}
                  </Col>

                </div>
              </Col>
              <Col className='position-absolute translate-middle-y top-50 start-0 ps-2 ps-xl-5 d-none d-md-block' xs={7} lg={8} xl={8} xxl={10}>
                <div className="ps-3 ps-xxl-5">
                  <h3 className='text-capitalize display-3 pe-5 mb-4 mb-xl-5 mb-xxl-4 fw-semibold'>Neutronpay's <br />send cash</h3>
                  <Col
                    xs={12}
                    lg={10}
                    as='ul'
                    className='fs-3 ps-0'
                  >
                    {thirdSlideContent.map((listItem, key) => <li className='mb-3 mb-lg-4 mb-xl-5 d-flex align-items-center' key={key}>
                      <Col as='img' xs={2} lg={2} xl={2} xxl={1} src={listItem.icon} alt='' className=' me-lg-0 me-xl-1  me-xxl-3 px-0 px-sm-2 px-lg-3 px-xl-4 px-xxl-0' />
                      <p className='fs-5 lh-sm pe-4 pe-lg-5 pe-xl-4 pe-xxl-5 mb-xxl-0'>
                        {listItem.paragraph}
                      </p>

                    </li>)}
                  </Col>

                </div>
              </Col>

              <Col as='img' src={sendCashImage} xs={6} xl={5} xxl={4} className='p-0 d-none d-md-block'></Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className='eerie-black-background p-4 text-white start-simplifying'>
            <h3 className='steel-pink-text text-center display-4 fw-semibold text-capitalize mb-3'>start simplifying</h3>
            <p className='text-center fs-5 mb-4 mb-sm-3 mb-xl-4'>Neutronpay is more than a payment platform; it's a gateway to a world where payments are no longer boring. Start simplifying your life with Neutronpay today.</p>
            <div className="px-4 px-sm-0 px-xl-5">
              <Row className='justify-content-between mx-0 mb-3 mb-xl-3 gy-3'>
                <Col
                  xl={4}
                  lg={4}
                  md={8}
                  sm={10}
                  className='border border-5 mx-auto mx-lg-0 rounded-4 border-black px-xl-3 py-lg-1 py-xl-1 pb-xl-0 grape-background position-relative carousel-card'>
                  <Row className='mx-0'>
                    <Col xxl={11} xl={10} lg={11} md={11} sm={10}>
                      <h4 className='border-bottom border-black border-3 pb-1 me-5 me-sm-5 me-md-5 mt-4 mt-xl-4 mt-lg-4 mt-md-3 mt-sm-4'>Businesses</h4>
                      <p className=' pe-xl-0'>Send and receive payments internationally with ease, expanding your reach without the slow payment rails.</p>
                    </Col>

                  </Row><Row className='mx-0 justify-content-start position-absolute d-none d-sm-flex w-100 top-0 start-100'>
                    <Col xxl={5} xl={6} lg={5} md={4} sm={4} xs={5}>
                      <img src={icon1} alt="" className='w-100 ps-4 ps-sm-0 pe-5 ps-xl-2 ps-xxl-0 pe-sm-3 pe-md-4 pe-lg-0 pe-xl-3 pe-xxl-4 pt-0 pt-sm-5 pt-md-5 pt-lg-5 pt-xl-5 pt-xxl-5 translate-middle-x' />
                    </Col>
                  </Row>

                </Col>
                <Col
                  xl={5}
                  lg={5}
                  md={8}
                  sm={10}
                  className='mx-auto mx-lg-0 border border-5 rounded-4 border-black px-xl-3 pt-xl-1 pb-xl-0 me-lg-5 me-xl-0 grape-background position-relative carousel-card'>
                  <Row className='mx-0'>
                    <Col xl={11} lg={11} md={10} sm={11}>
                      <h4 className='border-bottom border-black border-3 me-4 me-sm-5 me-md-0 mt-4 mt-sm-3 mt-md-3 mt-lg-0 pb-1'>Merchants Retailers with Neutronpay POS Mode</h4>
                      <p className='lh-sm'>Wheter you're catering to local customers or accepting various global currencies, Neutronpay POS Mode simplifies transactions for a seamless retail experience.</p>
                    </Col>

                  </Row>
                  <Row className='mx-0 justify-content-start position-absolute d-none d-sm-flex w-100 top-0 start-100'>
                    <Col xl={4} lg={5} md={5} sm={5} xs={1}>
                      <img src={icon2} alt="" className='w-100 translate-middle-x pe-sm-4 pe-md-5 pe-lg-4 pe-xl-0 ps-sm-2 ps-xl-0 pt-sm-5 pt-md-5 pt-lg-5 pt-xxl-3' />
                    </Col>
                  </Row>

                </Col>
              </Row>
              <Row className='justify-content-center mx-0 mb-3 mb-sm-4 mb-md-4 mb-lg-5 mb-xl-5'>
                <Col
                  xl={5}
                  lg={6}
                  md={8}
                  sm={10}
                  className='border border-5 rounded-4 border-black px-xl-3 py-md-1 py-lg-0 py-xl-1 pb-xl-4 grape-background position-relative carousel-card'>
                  <Row className='mx-0'>
                    <Col xl={12} md={11}>
                      <h4 className='border-bottom border-black border-3 pb-1 pt-lg-4 pt-xl-3 me-lg-4 mt-3 mt-sm-4 mt-md-3 mt-lg-0'>Streamers & Content Creators</h4>
                      <p className='lh-sm pe-lg-4'>Embrace LNURL for a hassle-free payment process. Connect with your global audience and receive payments effortlessly. Our platform removes the complexity typically associated with traditional platforms.</p>
                    </Col>
                  </Row>
                  <Row className='mx-0 justify-content-end position-absolute w-100 top-100 start-50 d-none d-sm-flex translate-middle'>
                    <Col xl={4} lg={3} md={3} sm={3} xs={1}>
                      <img src={icon3} alt="" className='w-100 pb-md-3 pb-lg-0' />
                    </Col>
                  </Row>

                </Col>
              </Row>
              <Row className='justify-content-between mx-0 mb-3  mb-xl-3 gy-3'>
                <Col
                  xl={5}
                  lg={5}
                  md={8}
                  sm={10}
                  className='border border-5 rounded-4 border-black px-xl-3 py-xl-1 pb-xl-0 ms-lg-5 ms-xl-0 mx-auto mx-lg-0 grape-background position-relative carousel-card'>
                  <Row className='mx-0 justify-content-end'>
                    <Col xl={12}>
                      <Row className='mx-0 p-0 justify-content-end'>
                        <h4 className='border-bottom border-black border-3 pb-1 mt-4 mt-md-3 mt-lg-2 mt-xl-2 mx-0 ps-0'>Frelancers & Remote Workers</h4>
                        <p className='lh-sm ps-xl-5 ps-lg-5 ps-md-5 ps-sm-4 ps-0'>Get paid for your work anywhere in the world, instantly and with minimal fees. Neutronpay ensures your hard work is rewarded without delay or high transaction costs.</p>

                      </Row>
                    </Col>

                  </Row><Row className='mx-0 justify-content-start position-absolute w-100 d-none d-sm-flex bottom-0 start-0'>
                    <Col xxl={3} xl={4} lg={4} md={3} sm={4} xs={1}>
                      <img src={icon4} alt="" className='w-100 pe-sm-4 pe-md-0 pb-sm-3 pb-md-0 translate-middle-x' />
                    </Col>
                  </Row>

                </Col>
                <Col
                  xl={4}
                  lg={4}
                  md={8}
                  sm={10}
                  className='border border-5 rounded-4 border-black px-lg-4 px-xl-4 py-lg-4 py-xl-1 pb-xl-0 mx-auto mx-lg-0 grape-background position-relative carousel-card'>
                  <Row className='mx-0'>
                    <Col xl={12}>
                      <h4 className='border-bottom border-black border-3 pb-1 mt-3 mt-sm-3 mt-md-3 mt-lg-3 mt-xl-4'>Daily convenience</h4>
                      <p className='lh-sm'>Pay bills, split expenses with friends, or shop online - all made simple with Neutronpay.</p>
                    </Col>

                  </Row>
                  <Row className='mx-0 justify-content-end position-absolute w-100 top-100 start-50 d-none d-sm-flex translate-middle'>
                    <Col xl={5} lg={6} md={4} sm={4} xs={6}>
                      <img src={icon5} alt="" className='w-100 pe-4 pe-sm-2 pe-md-0 ps-3 ps-sm-2 ps-md-3 ps-lg-0 pt-2 pt-lg-0' />
                    </Col>
                  </Row>

                </Col>
              </Row>
            </div>
          </Carousel.Item>
          <Carousel.Item className='LNURL-advance text-white pt-5 pb-4'>
            <h3 className='text-capitalize text-center display-1 fw-semibold mb-5'>LNURL advance</h3>
            <Row className='mx-0 mb-5 px-3 px-sm-4 px-md-5 align-items-center'>
              <Col
                xl={7}
                lg={6}
                as='ul'
                className='fs-3 ps-0'
              >
                {secondSlideContent.map((listItem, key) => <li className='mb-3 d-flex align-items-center' key={key}>
                  <Col as='img' xs={2} lg={3} xl={2} src={listItem.icon} alt='' className='me-1 me-sm-1 me-lg-0 me-xl-1 px-0 px-sm-3 px-lg-4 px-xxl-4' />
                  <p className='fs-4 lh-sm'>
                    {listItem.paragraph}
                  </p>

                </li>)}
              </Col>
              <Col
                xl={5}
                lg={6}
                as='img'
                src={LNURLAdvanceImage}
                alt=''>
              </Col>
            </Row>

          </Carousel.Item>



        </Carousel>
      </Container>
    </section>
  )
}

export default AppCarousel