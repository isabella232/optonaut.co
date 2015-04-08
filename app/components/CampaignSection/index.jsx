'use strict';

import React from 'react';

require('./index.less');

export default class CampaignSection extends React.Component {
  render() {
    return (
      <div id='section-campaign'>
        <div className='container' id='section-campaign-content'>
          <div className='row' id='section-campaign-head'>
            <div className='one-half column'>
              <h2>We Are Crowdfunding</h2>
            </div>
            <div className='one-half column'></div>
          </div>
          <div className='row'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <strong>text ever since the 1500s</strong>.</p>
          </div>
          <a href="#" className='button'>Yes, I Support This</a>
          <div className='row' id='section-campaign-rewards'>
            <div className='three columns'>
            Reward 1
            </div>
            <div className='three columns'>
            Reward 2
            </div>
            <div className='three columns'>
            Reward 3
            </div>
            <div className='three columns'>
            Reward 4
            </div>
          </div>
        </div>
        <div id='section-campaign-press'>
          <div className='container'>
            <a href='#'><img src={require('../../assets/images/techcrunch.svg')} /></a>
            <a href='#'><img src={require('../../assets/images/techcrunch.svg')} /></a>
            <a href='#'><img src={require('../../assets/images/techcrunch.svg')} /></a>
            <a href='#'><img src={require('../../assets/images/techcrunch.svg')} /></a>
            <a href='#'><img src={require('../../assets/images/techcrunch.svg')} /></a>
            <a href='#'><img src={require('../../assets/images/techcrunch.svg')} /></a>
          </div>
        </div>
      </div>
    );
  }
}
