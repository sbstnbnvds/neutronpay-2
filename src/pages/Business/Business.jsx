import React from 'react'

import './Business.css'

import Banner from './components/Banner'
import PayInsPayOuts from './components/PayInsPayOuts'
import APIFeatures from './components/APIFeatures'
import EngineeredForDevelopers from './components/EngineeredForDevelopers'
import PayPortal from './components/PayPortal'
import EnabledCountries from './components/EnabledCountries'
import PayoutDetails from './components/PayoutDetails'

const Business = () => {
  return (
    <>
      <Banner />
      <PayInsPayOuts />
      <APIFeatures />
      <EngineeredForDevelopers />
      <PayPortal />
      <EnabledCountries />
      {/* <PayoutDetails /> */}
    </>
  )
}

export default Business