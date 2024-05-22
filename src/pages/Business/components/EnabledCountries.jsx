import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import dottedBackground from '../../../assets/images/dotted-background.svg'

// Asian Countries
import { VietnamFlag, ThailandFlag, IndonesiaFlag, CambodiaFlag, PhilippinesFlag, MalaysiaFlag } from '../../../components/Tools'
const asianCountries = [
  ["Vietnam", VietnamFlag],
  ["Thailand", ThailandFlag],
  ["Indonesia", IndonesiaFlag],
  ["Cambodia", CambodiaFlag],
  ["Philippines", PhilippinesFlag],
  ["Malaysia", MalaysiaFlag],

]
// American Countries
import { CanadaFlag } from '../../../components/Tools'
const americanCountries = [
  ["Canada", CanadaFlag],
]
// African Countries
import { GhanaFlag, KenyaFlag, TogoFlag, IvoryCoastFlag, SenegalFlag, RwandaFlag, BeninFlag } from '../../../components/Tools'
const africanCountries = [
  [ "Ghana", GhanaFlag],
  [ "Kenya", KenyaFlag],
  [ "Togo", TogoFlag],
  [ "Ivory Coast", IvoryCoastFlag],
  [ "Senegal", SenegalFlag],
  [ "Rwanda", RwandaFlag],
  [ "Benin", BeninFlag],  
]
// Coming Soon
import { MexicoFlag, JapanFlag, UruguayFlag, SouthKoreaFlag} from '../../../components/Tools'
const comingSoonCountries = [
  ["Mexico", MexicoFlag],
  ["Japan", JapanFlag],
  ["South Korea", SouthKoreaFlag],
  ["Uruguay", UruguayFlag],
]

const tabList = [
  ["Asia", asianCountries],
  ["America", americanCountries],
  ["Africa", africanCountries],
  ["Coming Soon", comingSoonCountries],
]


const EnabledCountries = () => {

  const [hoveredTab, setHoveredTab] = useState("Asia")
  Container


  return (
    <section className='enabled-countries-section eerie-black-background pt-4'>
      <Container>
        <Row className='mx-0 mb-4 justify-content-center text-white align-items-center gy-5 position-relative z-3'>
          <Col lg={6} className='text-center px-1 d-flex flex-column align-items-center'>
            <h2 className='text-capitalize display-4 fw-semibold'>Enabled pay-out countries</h2>
            <p className='fs-5 fw-light'>With support for over 20+ different currencies, you'll be able to easily exchange, and transfer money instantly.</p>

            <a href="https://docs.neutronpay.com/?version=latest" target='_blank' className='align-self-center'>
              <Button className='text-capitalize rounded-5 steel-pink-background border-0 transition-1 text-capitalize'>API docs</Button>
            </a>
          </Col>
          <Col lg={6} md={10} className='text-center'>
            <Row className='text-center mx-0'>
              <p className='mb-1 mb-xl-2 p-0 fs-4 user-select-none text-capitalize'>Mass payouts</p>
            </Row>


            {tabList.map((tab, index) => <Row
              className='text-center justify-content-center mx-0 pb-xl-2 enabled-row-wrapper'
              key={tab}
              onMouseOver={(e) => {
                console.log(tab[0] + " onMouseOver")
                setHoveredTab(tab[0]);
              }}>
              <Row className='text-center mb-2'>
                <p className={'fs-4 p-0 m-0 user-select-none continent-p animate__animated ' + (tab[0] == hoveredTab ? 'animate__pulse' : '')}>
                  {tab[0]}
                </p>
              </Row>
              <Row className={'flags-wrapper text-center justify-content-center px-lg-5 pb-2 pb-lg-3 pb-xl-2 animate__animated ' + 
              (tab[0] == hoveredTab ? 'animate__fadeInDown' : 'd-none')}>
                {tab[1].map((country, index) => <Row
                  key={country}
                  className='flag-wrapper px-1 px-sm-2 px-md-2 px-lg-1 px-xl-2 mx-0'>
                  <img
                    src={country[1]}
                    className='rounded-circle w-100 h-100 p-0 border border-2'
                    alt={country[0]}
                  >
                  </img>
                </Row>
                )}
              </Row>
            </Row>
            )}
          </Col>
        </Row>

        <Row className="mx-0 justify-content-center">
          <Col xxl={7} xl={7} lg={7} md={12} sm={12} xs={12} className='position-relative'>
            <img src={dottedBackground} className='w-100 position-absolute bottom-0 start-0' alt="" />
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default EnabledCountries