import React from 'react'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import { CanadaFlag, VietnamFlag, PhilippinesFlag, ThailandFlag, IndonesiaFlag } from '../../../components/Tools'

import roundedTick from '../../../assets/images/tick-rounded.svg'
import tick from '../../../assets/images/tick.svg'
import cross from '../../../assets/images/cross.svg'

const PayoutDetails = () => {
  return (
    <section className='payout-details-section py-5'>
      <Container>

          <Row className='w-100 m-0 rounded-2 py-4 px-2 shadow shadow-lg'>
            <h2 className='grape-text text-capitalize text-center fw-800 fs-1 pb-5'>payout details</h2>


            <Row className='w-100 m-0 p-0'>
              <div className='d-flex ms-auto justify-content-center align-items-center text-center fs-6 payout-details-col header-payout-details'>Mass payouts in Bitcoin</div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 payout-details-col header-payout-details'>Pay-in</div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 payout-details-col header-payout-details'>Pay-out</div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 payout-details-col header-payout-details'>Bank withdraw</div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 payout-details-col header-payout-details'>Mobile money withdraw</div>
            </Row>
            <Row className='m-0 p-0 py-3'>
              <div className='d-flex payout-details-text-col m-0 p-0 align-items-center justify-content-center'>
                <img src={CanadaFlag} alt="" className='col-1 rounded-circle border border-2 me-4' />
                <p className='m-0 fs-4'>Canada</p>
              </div>

              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col h-100'>
                <img src={roundedTick} alt="" className='h-100' />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>

            </Row>

            <Row className='m-0 p-0 py-3'>
              <div className='d-flex payout-details-text-col m-0 p-0 align-items-center justify-content-center'>
                <img src={VietnamFlag} alt="" className='col-1 rounded-circle border border-2 me-4' />
                <p className='m-0 fs-4'>Vietnam</p>
              </div>

              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col h-100'>
                <img src={roundedTick} alt="" className='h-100' />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>

            </Row>


            <Row className='m-0 p-0 py-3'>
              <div className='d-flex payout-details-text-col m-0 p-0 align-items-center justify-content-center'>
                <img src={PhilippinesFlag} alt="" className='col-1 rounded-circle border border-2 me-4' />
                <p className='m-0 fs-4'>Philippines</p>
              </div>

              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col h-100'>
                <img src={roundedTick} alt="" className='h-100' />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>

            </Row>


            <Row className='m-0 p-0 py-3'>
              <div className='d-flex payout-details-text-col m-0 p-0 align-items-center justify-content-center'>
                <img src={ThailandFlag} alt="" className='col-1 rounded-circle border border-2 me-4' />
                <p className='m-0 fs-4'>Thailand</p>
              </div>

              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col h-100'>
                <img src={roundedTick} alt="" className='h-100' />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>
            </Row>

            <Row className='m-0 p-0 py-3'>
              <div className='d-flex payout-details-text-col m-0 p-0 align-items-center justify-content-center'>
                <img src={IndonesiaFlag} alt="" className='col-1 rounded-circle border border-2 me-4' />
                <p className='m-0 fs-4'>Indonesia</p>
              </div>

              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col h-100'>
                <img src={roundedTick} alt="" className='h-100' />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={cross} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>
              <div className='d-flex justify-content-center align-items-center text-center fs-6 p-0 m-0 payout-details-col'>
                <img src={tick} alt="" />
              </div>
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