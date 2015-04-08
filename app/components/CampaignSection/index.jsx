'use strict';

import React from 'react';

require('./index.less');

export default class CampaignSection extends React.Component {
  render() {
    return (
      <div id='section-campaign'>
        <div className='container' id='section-campaign-content'>
          <div id='section-campaign-headline'>
            <h2>We Are Crowdfunding</h2>
          </div>
          <div id='section-campaign-cite'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <strong>text ever since the 1500s</strong>.</p>
            <span id='section-campaign-author'>Johannes Schickling, Co-Founder<img src={require('../../assets/images/face.jpg')} id='section-campaign-head' /></span>
          </div>
          <div id='section-campaign-button'>
            <a className='button' href="#">Yes, I Want To Support Optonaut</a>
          </div>
          <div className='row' id='section-campaign-rewards'>
            <div className='one-third column'>
            Reward 1
            </div>
            <div className='one-third column'>
            Reward 2
            </div>
            <div className='one-third column'>
            Reward 3
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
