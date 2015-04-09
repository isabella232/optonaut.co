'use strict';

import React from 'react';
import NavBar from '../NavBar';
import HomeSection from '../HomeSection';
import CampaignSection from '../CampaignSection';
import FeaturesSection from '../FeaturesSection';
import HardwareSection from '../HardwareSection';
import ProcessSection from '../ProcessSection';
import MapSection from '../MapSection';
import FaqSection from '../FaqSection';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

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
        <ProcessSection/>
        <MapSection/>
        <FaqSection/>
        <ContactSection/>
        <Footer/>
      </div>
    );
  }
}
