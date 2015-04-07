'use strict';

import React from 'react';

require('./index.less');

export default class CampaignSection extends React.Component {
  render() {
    return (
      <div id='section-campaign'>
        <div className='container' id='section-campaign-content'>
          <h2>We Are Crowdfunding</h2>
        </div>
      </div>
    );
  }
}
