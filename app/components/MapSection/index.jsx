'use strict';

import React from 'react';

require('./index.less');

export default class MapSection extends React.Component {
  render() {
    return (
      <div id='section-map'>
        <div id='section-map-wrapper'>
          <div className='container' id='section-map-content'>
            <div id='section-map-phone'><img src={require('../../assets/images/app.jpg')} /></div>
            <div id='section-map-pois'>
              <div id='section-map-pois-wrapper'>
                <div className='active'></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div id='section-map-invite'>
          <div className='container'>
            <a className='button inverse' href="#"><span className='icon'></span>Request Invite</a>
          </div>
        </div>
      </div>
    );
  }
}
