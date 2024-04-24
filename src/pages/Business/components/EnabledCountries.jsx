import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { asianCountries, americanCountries, africanCountries } from '../../../components/Tools'


const tabList = [
  ["Asia", asianCountries],
  ["America", americanCountries],
  ["Africa", africanCountries],
]
// tabList.map((tab, index) => <Row className=''>
//   {tab[0]}

// </Row>)


// < Row className = 'text-center justify-content-center enabled-row-wrapper' >
//           <Row className='flags-wrapper text-center justify-content-center px-5'>
//             {asianCountries.map((country, index) => <Row
//               key={index}
//               className='flag-wrapper px-1 mx-1'
//             >
//               <img
//                 src={country[1]}
//                 className='rounded-circle w-100 h-100 p-0 border border-3'
//                 alt={country[0]}
//               >
//               </img>
//             </Row>


//             )}
//           </Row>
//           <Row className='text-center'>
//             <p className='text-center fs-4 p-0 enabled-countries-continent'>
//               Asia
//             </p>
//           </Row>
// </Row >

const EnabledCountries = () => {

  const [hoveredTab, setHoveredTab] = useState("Africa")
  const tabList = [
    ["Asia", asianCountries],
    ["America", americanCountries],
    ["Africa", africanCountries],
  ]


  return (
    <section className='enabled-countries-section eerie-black-background py-4'>
      <Row className='w-100 justify-content-center text-white align-items-center'>
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
          
          
          {tabList.map((tab, index) => <Row 
          className='text-center justify-content-center enabled-row-wrapper'
          key={tab}
          onMouseOver={(e) => {
            console.log(tab[0] + " onMouseOver")
            setHoveredTab(tab[0]);
          }}>
            <Row className={'flags-wrapper text-center justify-content-center px-5 ' + (tab[0] == hoveredTab ? 'slide-in-up' : 'slide-out-down')}>
              {tab[1].map((country, index) => <Row
                key={country}
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
                {tab[0]}
              </p>
            </Row>
          </Row>
          )}


        </Col>
      </Row>
    </section>
  )
}

export default EnabledCountries