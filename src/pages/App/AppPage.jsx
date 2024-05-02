import React from 'react'

import Banner from './components/Banner'
import BitcoinBeyond from './components/BitcoinBeyond'
import AvailableNow from './components/AvailableNow'
import AppCarousel from './components/Carousel'

import './AppPage.css'

const AppPage = () => {
  return (
    <>
      <Banner />
      <AppCarousel />

      <BitcoinBeyond />
      <AvailableNow />

    </>
  )
}

export default AppPage