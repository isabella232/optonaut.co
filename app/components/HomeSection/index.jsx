'use strict';

import React from 'react';

require('./index.less');

let HomeSection = React.createClass({
  render() {
    return (
      <div id='section-home'>
        <div id='section-home-bg'>
          <video autoPlay id='bgvid' loop poster={require('../../assets/images/home.jpg')}>
          </video>
        </div>
        <div className='container' id='section-home-content'>
          <div id='section-home-headline'>
            <h1>Dive Into Your Pictures</h1>
            <span>Take Virtual Reality Photographs With Your Smartphone.</span>
          </div>
          <div className='icon' id='section-home-play'></div>
        </div>
        <div id='section-home-foot'>
          <div className='container' id='section-home-foot-wrapper'>
            <div id='section-home-foot-desc'>The Optonaut App is <strong>invite only</strong> at this stage. Request an invite to get <strong>early access</strong>.</div>
            <div id='section-home-foot-button'>Reqest Invite</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomeSection;
