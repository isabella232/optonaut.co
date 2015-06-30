'use strict';

import React from 'react';
import HomeSection from '../HomeSection';
import CampaignSection from '../CampaignSection';
import FeaturesSection from '../FeaturesSection';
import CommunitySection from '../CommunitySection';
import HardwareSection from '../HardwareSection';
import ProcessSection from '../ProcessSection';
import ProfessionellSection from '../ProfessionellSection';
import MapSection from '../MapSection';
import FaqSection from '../FaqSection';
import ContactSection from '../ContactSection';
import HeadParams from '../../lib/HeadParams';

require('./index.less');

export default class HomeHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Optonaut - Virtual Reality Photography');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  render() {
    return (
      <div>
        <HomeSection/>
        {/*<CampaignSection/>*/}
        <FeaturesSection/>
        {/*<MapSection/>*/}
        {/*<HardwareSection/>*/}
        <ProcessSection/>
        {/*<ProfessionellSection/>*/}
        <FaqSection/>
        <ContactSection/>
      </div>
    );
  }
}

HomeHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
