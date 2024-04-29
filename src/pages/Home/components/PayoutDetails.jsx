import React from 'react'
import { Link } from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { CanadaFlag, VietnamFlag, PhilippinesFlag, ThailandFlag, IndonesiaFlag } from '../../../components/Tools'

import roundedTick from '../../../assets/images/tick-rounded.svg'
import tick from '../../../assets/images/tick.svg'
import cross from '../../../assets/images/cross.svg'

const PayoutDetails = () => {

  const payoutList = [
    {
      "country": "canada",
      "image": CanadaFlag,
      "massPayouts": true,
      "payIn": true,
      "payOut": false,
      "bankWithdraw": true,
      "mobileWithdraw": true,
    },
    {
      "country": "vietnam",
      "image": VietnamFlag,
      "massPayouts": true,
      "payIn": false,
      "payOut": false,
      "bankWithdraw": true,
      "mobileWithdraw": true,
    },
    {
      "country": "philippines",
      "image": PhilippinesFlag,
      "massPayouts": true,
      "payIn": false,
      "payOut": false,
      "bankWithdraw": false,
      "mobileWithdraw": true,
    },
    {
      "country": "thailand",
      "image": ThailandFlag,
      "massPayouts": true,
      "payIn": true,
      "payOut": false,
      "bankWithdraw": true,
      "mobileWithdraw": true,
    },
    {
      "country": "indonesia",
      "image": IndonesiaFlag,
      "massPayouts": true,
      "payIn": false,
      "payOut": false,
      "bankWithdraw": true,
      "mobileWithdraw": true,
    },
  ]
  return (
    <section className='payout-details-home-section py-5'>
      <Container>

        <Row className='w-100 m-0 rounded-5 py-4 px-2 shadow-sm shadow-lg'>
          <h2 className='grape-text text-capitalize text-center fw-800 fs-1 pb-4'>payout details</h2>

          <Row className='m-0 p-0 pe-md-3 pe-lg-0 pb-3 align-items-center'>
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
          {payoutList.map((country, index) => <Row className='mx-0 p-0 pe-md-3 pe-lg-0 pb-2 pb-sm-3 pb-md-4 align-items-center' key={index}>
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
          <Row className='mx-0 justify-content-center pt-5 pb-4'>
            <Col className='d-flex justify-content-center steel-pink-to-grape-background col-auto rounded-5 text-decoration-none transition-1'
              as={Link}>
              <Row className='m-0 bg-white rounded-5 px-sm-4 px-5 py-1 text-black'>

                Learn more
              </Row>
            </Col>
          </Row>
        </Row>

      </Container>
    </section>
  )
}

export default PayoutDetails






// Create an array of alternating colors:

// const alternatingColor = ['#d5d5d5', '#a9a9a9']; // because this is a static array, you can move it out of the component
// Use the Array#map 2nd parameter to get the index of the item:

// stats.map((season, index) => {
// Get the color from the array using the remainder operator % operator:

// <StatLine color={alternatingColor[index % alternatingColor.length]} {...season}/>
// The render method (not tested):

// render() {

//   const alternatingColor = ['#d5d5d5', '#a9a9a9']; // you can move it out of the render method

//   const Stats = stats.map((season, index) => {
//       return <StatLine color={alternatingColor[index % alternatingColor.length]}  {...season}/>;
//   });

//   return (
//     <div>
//      {Stats}
//     </div>
//   );
// };