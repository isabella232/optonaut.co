'use strict';

import React from 'react';

require('./index.less');

export default class HardwareSection extends React.Component {
  render() {
    return (
      <div id='section-hardware'>
        <div className='container' id='section-hardware-content'>
          <h2>All You Need</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <strong>text ever since the 1500s,</strong> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
          <div className='row' id='section-hardware-list'>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware1.png')} />
              <span>Easy Capturing Process</span>
            </div>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware2.png')} />
              <span>Full 360° In Real 3D</span>
            </div>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware3.png')} />
              <span>View With Any VR Glasses</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
