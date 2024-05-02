import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { VietnamFlag, PhilippinesFlag, ThailandFlag, IndonesiaFlag, MalaysiaFlag, CambodiaFlag, SingaporeFlag, SouthKoreaFlag, IndiaFlag } from '../../../components/Tools'
const asianCountries = [
  {
  "country": "vietnam",
  "image": VietnamFlag,
  "massPayouts": true,
  "payIn": false,
  "payOut": false,
  "bankWithdraw": true,
  "mobileWithdraw": true,
}, {
  "country": "philippines",
  "image": PhilippinesFlag,
  "massPayouts": true,
  "payIn": false,
  "payOut": false,
  "bankWithdraw": false,
  "mobileWithdraw": true,
}, {
  "country": "thailand",
  "image": ThailandFlag,
  "massPayouts": true,
  "payIn": true,
  "payOut": false,
  "bankWithdraw": true,
  "mobileWithdraw": true,
}, {
  "country": "indonesia",
  "image": IndonesiaFlag,
  "massPayouts": true,
  "payIn": false,
  "payOut": false,
  "bankWithdraw": true,
  "mobileWithdraw": true,
}, {
  "country": "malaysia",
  "image": MalaysiaFlag,
  "massPayouts": true,
  "payIn": true,
  "payOut": false,
  "bankWithdraw": true,
  "mobileWithdraw": true,
}, {
  "country": "cambodia",
  "image": CambodiaFlag,
  "massPayouts": true,
  "payIn": false,
  "payOut": false,
  "bankWithdraw": true,
  "mobileWithdraw": true,
},  {
  "country": "singapore",
  "image": SingaporeFlag,
  "massPayouts": true,
  "payIn": false,
  "payOut": false,
  "bankWithdraw": false,
  "mobileWithdraw": true,
}, {
  "country": "korea",
  "image": SouthKoreaFlag,
  "massPayouts": true,
  "payIn": true,
  "payOut": false,
  "bankWithdraw": true,
  "mobileWithdraw": true,
}, {
  "country": "india",
  "image": IndiaFlag,
  "massPayouts": true,
  "payIn": false,
  "payOut": false,
  "bankWithdraw": true,
  "mobileWithdraw": true,
},
]
import { CanadaFlag } from '../../../components/Tools'
const americanCountries = [
  {
    "country": "canada",
    "image": CanadaFlag,
    "massPayouts": true,
    "payIn": true,
    "payOut": false,
    "bankWithdraw": true,
    "mobileWithdraw": true,
  },
]
import { KenyaFlag, GhanaFlag, RwandaFlag, TogoFlag, SenegalFlag, IvoryCoastFlag, BeninFlag } from '../../../components/Tools'
const africanCountries = [
  {
    "country": "kenya",
    "image": KenyaFlag,
    "massPayouts": true,
    "payIn": false,
    "payOut": false,
    "bankWithdraw": true,
    "mobileWithdraw": true,
  }, {
    "country": "ghana",
    "image": GhanaFlag,
    "massPayouts": true,
    "payIn": true,
    "payOut": false,
    "bankWithdraw": true,
    "mobileWithdraw": true,
  }, {
    "country": "rwanda",
    "image": RwandaFlag,
    "massPayouts": true,
    "payIn": false,
    "payOut": false,
    "bankWithdraw": true,
    "mobileWithdraw": true,
  }, {
    "country": "togo",
    "image": TogoFlag,
    "massPayouts": true,
    "payIn": false,
    "payOut": false,
    "bankWithdraw": false,
    "mobileWithdraw": true,
  }, {
    "country": "senegal",
    "image": SenegalFlag,
    "massPayouts": true,
    "payIn": true,
    "payOut": false,
    "bankWithdraw": true,
    "mobileWithdraw": true,
  }, {
    "country": "côte d'ivoire",
    "image": IvoryCoastFlag,
    "massPayouts": true,
    "payIn": false,
    "payOut": false,
    "bankWithdraw": true,
    "mobileWithdraw": true,
  }, {
    "country": "benin",
    "image": BeninFlag,
    "massPayouts": true,
    "payIn": true,
    "payOut": false,
    "bankWithdraw": true,
    "mobileWithdraw": true,
  }
]


import roundedTick from '../../../assets/images/tick-rounded.svg'
import tick from '../../../assets/images/tick.svg'
import cross from '../../../assets/images/cross.svg'
import drowpdownArrow from '../../../assets/images/business/dropdown-arrow.svg'


const continentList = [
  {
    "continent": "asia",
    "countries": asianCountries,
  },
  {
    "continent": "america",
    "countries": americanCountries,
  },
  {
    "continent": "africa",
    "countries": africanCountries,
  },
]

const PayoutDetails = () => {
  return (
    <section className='business-payout-details py-5'>
      <h2 className='text-center text-capitalize grape-text display-3 fw-semibold mb-4'>Payout details</h2>
      <Container>
        {continentList.map((continent, index) => <>
          <Row className='mx-0 pt-2 fs-1 border-bottom border-3 text-center text-capitalize justify-content-center position-relative user-select-none cursor-pointer'>
            {continent.continent}
            <Col
              xs={1}
              className='position-absolute end-0'>
              <img src={drowpdownArrow} alt="" className='' />
            </Col>
          </Row>
          <Row className='m-0 p-0 pe-md-3 pe-lg-0 pb-3 pt-2 align-items-center'>
            <Col
              xxl={3}
              lg={4}
              sm={3}
              xs={4}
              className='payout-first-column'></Col>
            <Col className='text-center fs-5'>
              Bitcoin mass payouts
            </Col>
            <Col className='text-center d-none d-sm-block fs-5'>
              Pay-in
            </Col>
            <Col className='text-center d-none d-md-block fs-5'>
              Pay-out
            </Col>
            <Col className='text-center fs-5'>
              Bank withdraw
            </Col>
            <Col className='text-center d-none d-sm-block fs-5 p-sm-1'>
              Mobile money withdraw
            </Col>
          </Row>
          {continent.countries.map((country, index) => <Row className='mx-0 p-0 pe-md-3 pe-lg-0 pb-2 pb-sm-3 pb-md-4 align-items-center' key={index}>
            <Col
              xxl={3}
              lg={4}
              sm={3}
              xs={4}
              className='text-capitalize fs-2 ps-xxl-2 ps-xl-5 ps-lg-4 d-flex ps-md-3 align-items-center payout-first-column'>
              <Row className='mx-0 align-items-center'>
                <Col
                  lg={3}
                  xl={3}
                  xxl={3}
                  xs={12}
                  className=''>
                  <img src={country.image} alt="" className='w-100 me-xl-3 me-xxl-1 rounded-circle border border-3 shadow-sm d-none d-lg-inline' />
                </Col>
                <Col
                  lg={9}
                  xl={8}>
                  <p className='pt-lg-1 m-0'>{country.country}</p>
                </Col>
              </Row>
            </Col>
            <Col className='justify-content-center d-flex'>
              <img src={country.massPayouts ? roundedTick : cross} alt="" className='w-50 p-xxl-3 p-xl-2 p-lg-2 p-md-1 p-sm-1 p-2' />
            </Col>
            <Col className='justify-content-center d-none d-sm-flex'>
              <img src={country.payIn ? tick : cross} alt="" className='w-50 p-xxl-1' />
            </Col>
            <Col className='justify-content-center d-none d-md-flex'>
              <img src={country.payOut ? tick : cross} alt="" className='w-50' />
            </Col>
            <Col className='d-flex justify-content-center'>
              <img src={country.bankWithdraw ? tick : cross} alt="" className='w-50' />
            </Col>
            <Col className='justify-content-center d-none d-sm-flex'>
              <img src={country.mobileWithdraw ? tick : cross} alt="" className='w-50' />
            </Col>
          </Row>
          )}
        </>)}

      </Container>
    </section>
  )
}

export default PayoutDetails