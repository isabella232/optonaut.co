'use strict';

import React from 'react';

require('./index.less');

let HomeSection = React.createClass({

  getInitialState() {
    return {
      showInviteForm: false
    };
  },

  showInviteForm: function() {
    this.setState({ showInviteForm: true });
  },

  render() {
    let foot;
    if (this.state.showInviteForm) {
      foot = (
        <div className='container' id='section-home-foot-wrapper'>
        <span>Some Form</span>
          <div id='section-home-foot-button' onClick={this.showInviteForm}>Yes, I Want An Invite</div>
        </div>
      );
    } else {
      foot = (
        <div className='container' id='section-home-foot-wrapper'>
          <div id='section-home-foot-desc'>The Optonaut App is <strong>invite only</strong> at this stage. <span className='hide-small'>Request an invite to get <strong>early access</strong>.</span></div>
          <div id='section-home-foot-button' onClick={this.showInviteForm}>Request Invite</div>
        </div>
      );
    }

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
        <div id='section-home-foot'>{foot}</div>
      </div>
    );
  }
});

module.exports = HomeSection;
