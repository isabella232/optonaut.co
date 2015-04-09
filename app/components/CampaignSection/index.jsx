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
            <span id='section-campaign-author'>Johannes Schickling, Co-Founder<img id='section-campaign-head' src={require('../../assets/images/face.jpg')} /></span>
          </div>
          <div id='section-campaign-button'>
            <a className='button' href="#"><span className='icon'></span>Yes, I Want To Support Optonaut</a>
          </div>
          <div className='row' id='section-campaign-rewards'>
            <div>
              <div className='section-campaign-reward-price'>5$</div>
              <div className='section-campaign-reward-info'>
                <div className='section-campaign-reward-title'>VR Glasses</div>
                <div className='section-campaign-reward-status'>3453/5000 left</div>
              </div>
              <div className='section-campaign-reward-image'><img src={require('../../assets/images/hardware3.png')} /></div>
            </div>
            <div>
              <div className='section-campaign-reward-price'>5$</div>
              <div className='section-campaign-reward-info'>
                <div className='section-campaign-reward-title'>VR Glasses</div>
                <div className='section-campaign-reward-status'>3453/5000 left</div>
              </div>
              <div className='section-campaign-reward-image'><img src={require('../../assets/images/hardware2.png')} /></div>
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
