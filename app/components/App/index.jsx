'use strict';

import React from 'react';
import HomeSection from '../HomeSection';
import CampaignSection from '../CampaignSection';
import FeaturesSection from '../FeaturesSection';
import HardwareSection from '../HardwareSection';
import FaqSection from '../FaqSection';
import Footer from '../Footer';
import NavBar from '../NavBar';

require('./index.less');

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <HomeSection/>
        <CampaignSection/>
        <FeaturesSection/>
        <HardwareSection/>
        <FaqSection/>
        <Footer/>
      </div>
    );
  }
}
