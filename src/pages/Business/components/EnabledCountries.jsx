import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

// Asia
import CambodiaFlag from '../../../assets/images/flags/Cambodia.svg'
import IndonesiaFlag from '../../../assets/images/flags/Indonesia.svg'
import JapanFlag from '../../../assets/images/flags/Japan.svg'
import MalaysiaFlag from '../../../assets/images/flags/Malaysia.svg'
import PhilippinesFlag from '../../../assets/images/flags/Philippines.svg'
import SouthKoreaFlag from '../../../assets/images/flags/South Korea.svg'
import ThailandFlag from '../../../assets/images/flags/Thailand.svg'
import VietnamFlag from '../../../assets/images/flags/Vietnam.svg'

// America
import ArgentinaFlag from '../../../assets/images/flags/Argentina.svg'

const asianCountries = [
  ["Cambodia", CambodiaFlag],
  ["Indonesia", IndonesiaFlag],
  ["Japan", JapanFlag],
  ["Malaysia", MalaysiaFlag],
  ["Philippines", PhilippinesFlag],
  ["South Korea", SouthKoreaFlag],
  ["Thailand", ThailandFlag],
  ["Vietnam", VietnamFlag],
]

const EnabledCountries = () => {
  return (
    <section className='enabled-countries-section eerie-black-background py-4'>
      <Row className='w-100 justify-content-center text-white'>
        <Col xs={6} className='text-center px-5 d-flex flex-column align-items-center'>
          <h2 className='text-capitalize display-4 fw-semibold'>Enabled pay-out countries</h2>
          <p className='fs-5 fw-light'>With support for over 20+ different currencies, you'll be able to easily exchange, and transfer money instantly.</p>

          <a href="#" className='align-self-center'>
            <Button className='text-capitalize rounded-5 steel-pink-background border-0 transition-1'>Contact our API documents</Button>
          </a>
        </Col>
        <Col xs={6} className='text-center'>
          <Row className='text-center'>
            <p className='mb-1 p-0 fs-3'>Mass payouts</p>
          </Row>
          <Row className='text-center justify-content-center enabled-row-wrapper'>
            <Row className='flags-wrapper text-center justify-content-center px-5'>
              {asianCountries.map((country, index) => <Row
                key={index}
                className='flag-wrapper px-1 mx-1'>
                  <img
                    src={country[1]}
                    className='rounded-circle w-100 h-100 p-0 border border-3'
                    alt={country[0]}
                  >
                  </img>
                </Row>
              

              )}
            </Row>
            <Row className='text-center'>
              <p className='text-center fs-4 p-0 enabled-countries-continent'>
                Asia
              </p>
            </Row>
          </Row>
        </Col>
      </Row>
    </section>
  )
}

export default EnabledCountries