'use strict';

import React from 'react';
import HomeSection from './HomeSection';
import RecordSection from './RecordSection';
import DiscoverSection from './DiscoverSection';
import ReviewsSection from './ReviewsSection';
import FaqSection from './FaqSection';
import HeadParams from '../../lib/HeadParams';

export default class HomeHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Optonaut - Virtual Reality Photography');
    this.props.headParams.setDescription('Take Virtual Reality pictures using your phone and share them with your friends.');
  }

  render() {
    return (
      <div>
        <HomeSection />
        <RecordSection />
        <DiscoverSection />
        <ReviewsSection />
        <FaqSection />
      </div>
    );
  }
}

HomeHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams)
};
