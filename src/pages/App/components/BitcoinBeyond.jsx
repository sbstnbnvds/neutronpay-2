import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import backgroundImage from '../../../assets/images/app/bitcoin-beyond.png'
import listTick from '../../../assets/images/business/list-tick.svg'

const BitcoinBeyond = () => {
  return (
    <section className="bitcoin-beyond-section">
      <Container>

        <h2 className='steel-pink-text text-capitalize text-center py-0 my-1 display-2 fw-semibold pb-4 steel-pink-to-grape-background gradient-text'>Bitcoin beyond assets <br className='d-none d-md-inline'/> a world of value</h2>
        <Row className='justify-content-center mx-0 px-2 py-3'>
          <p className='fs-3'>BTC is like the gold of the internet world. It's not just money, it's the best kind of money we've ever had in the digital world. It's all about real, fair prices and being the best choice for keeping your money safe.</p>
          <Row className='px-0 mx-0 align-items-center flex-row-reverse justify-content-center'>
            <Col xxl={9} lg={9} md={8} xs={12} className=''>
              <ul className='fs-3 ps-0'>
                <li className='mb-3 d-flex'>
                  <img src={listTick} alt="" className='pe-4' />
                  <p>
                    Use Neutronpay to not just hold Bitcoin but actively participate in its ecosystem. Spend, earn, and grow your value within the thriving Bitcoin economy.
                  </p>
                </li>
                <li className='mb-3 d-flex'>
                  <img src={listTick} alt="" className='pe-4' />
                  <p>
                    Top up Bitcoin directly within the app and transfer it to your secure cold wallet for safekeeping
                  </p>
                </li>
              </ul>
            </Col>
            <Col xxl={3} lg={3} md={4} xs={7} className='px-xxl-5'>
              <img src={backgroundImage} alt="" className='w-100' />
            </Col>

          </Row>
        </Row>
      </Container>
    </section>
  )
}

export default BitcoinBeyond