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
        <div className='container'>
          <div id='section-home-headline'>
            <h1>Dive Into Your Pictures</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = HomeSection;
