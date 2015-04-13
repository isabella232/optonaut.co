'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./index.less');

export default class HardwareSection extends React.Component {
  render() {
    return (
      <div id='section-hardware'>
        <div className='container' id='section-hardware-content'>
          <h2>You Only Need Three Things</h2>
          <div className='row' id='section-hardware-list'>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware1.png')} />
              <span>Our Optoboard</span>
            </div>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware2.png')} />
              <span>Two Smartphones*</span>
            </div>
            <div className='one-third column'>
              <img src={require('../../assets/images/hardware3.png')} />
              <span>Some VR Glasses</span>
            </div>
          </div>
          <p>To create and view a 3D panorama or an Optograph as we call it, you need three things*: an <strong>Optoboard on which you mount two smartphones</strong> (ask your friend to lend you one for a minute) and one of the <Link to='/'>supported VR glasses</Link>.
</p>
          <a className='big-button' href="#"><span className='icon'></span>Pre-Order Earlybird Set (12$)</a>
          <div id='section-hardware-explanation'>* This solution is the most affordable we could think of. But if you are willing to spend the extra dollar, we provide you with a <Link to='/'>3d lens from our partner Kula</Link> so a single smartphone is sufficient.</div>
        </div>
      </div>
    );
  }
}

// <div id='section-hardware-explanation'>* We know it sucks that you need two smartphones to create an Optograph but we got you covered. Our hardware partner Kula3D provides <Link to='/'>a camera-lens which works with one smartphone</Link>.</div>
