import React from 'react';
import './Home.css';

import Banner from './components/Banner';
import Benefits from './components/Benefits';
import LightningNetworkAdvantage from './components/LightningNetworkAdvantage';
import TrustedByBusinesses from './components/TrustedByBusinesses';
import InstantPayments from './components/InstantPayments';
import EconomicalFees from './components/EconomicalFees';
import WorldwideReach from './components/WorldwideReach';
import APIForEAndB from './components/APIForEAndB';
import PayoutDetails from './components/PayoutDetails';
import YourWorldInYourHands from './components/YourWorldInYourHands';


const Home = () => {
  return (<>
    <Banner/>
    <Benefits/>
    <LightningNetworkAdvantage />
    <TrustedByBusinesses/>
    <InstantPayments/>
    <EconomicalFees/>
    <WorldwideReach/>
    <APIForEAndB/>
    <PayoutDetails/>
    <YourWorldInYourHands/>
    
  </>
    
  )
}

export default Home