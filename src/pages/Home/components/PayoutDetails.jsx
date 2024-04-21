import React from 'react'
import Row from 'react-bootstrap/Row'


const PayoutDetails = () => {
  return (
    <section className='payout-details-section eerie-black-background justify-content-center d-flex py-5'>
      <Row className='w-75 m-0 steel-pink-to-grape-background payout-details-wrapper rounded-2'>
        <Row className='eerie-black-background w-100 m-0 rounded-2 py-4'>
          <h2 className='text-white text-capitalize text-center fw-800 fs-1 pb-5'>payout details</h2>
          
          
          <Row className='w-100 d-flex flex-row m-0 p-0'>
            <div className='d-flex ms-auto justify-content-center align-items-center text-white text-center fs-6 payout-details-col'>Mass payouts in Bitcoin</div>
            <div className='d-flex justify-content-center align-items-center text-white text-center fs-6 payout-details-col'>Pay-in</div>
            <div className='d-flex justify-content-center align-items-center text-white text-center fs-6 payout-details-col'>Pay-out</div>
            <div className='d-flex justify-content-center align-items-center text-white text-center fs-6 payout-details-col'>Bank withdraw</div>
            <div className='d-flex justify-content-center align-items-center text-white text-center fs-6 payout-details-col'>Mobile money withdraw</div>
          </Row>

          <Row>

          </Row>
        </Row>

      </Row>
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