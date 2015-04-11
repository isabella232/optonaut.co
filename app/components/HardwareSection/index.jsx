'use strict';

import React from 'react';

require('./index.less');

export default class HardwareSection extends React.Component {
  render() {
    return (
      <div id='section-hardware'>
        <div className='container' id='section-hardware-content'>
          <h2>You Need Three Things</h2>
          <div className='row' id='section-hardware-list'>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware1.png')} />
              <span>Our Optoboard</span>
            </div>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware2.png')} />
              <span>Your Smartphone*</span>
            </div>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware3.png')} />
              <span>Some VR Glasses</span>
            </div>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy <strong>text ever since the 1500s,</strong> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
          <a className='button' href="#"><span className='icon'></span>Pre-Order Full Hardware Set</a>
          <div id='section-hardware-explanation'>* Some lousy explanation</div>
        </div>
      </div>
    );
  }
}
