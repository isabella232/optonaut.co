'use strict';

import React from 'react';

require('./index.less');

export default class Footer extends React.Component {
  render() {
    return (
      <div id='footer'>
        <div className='container'>
          <div className='six columns'>
            Optonaut 2015<br/><br/><strong>mail@optonaut.io</strong>
          </div>
          <div className='two columns'>
            <h5>About</h5>
            <ul>
              <li><a href='#'>Team</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Press</a></li>
            </ul>
          </div>
          <div className='two columns'>
            <h5>Hardware</h5>
            <ul>
              <li><a href='#'>Pre-Order</a></li>
              <li><a href='#'>Durovis Dive</a></li>
              <li><a href='#'>Kula3D</a></li>
            </ul>
          </div>
          <div className='two columns'>
            <h5>Legal</h5>
            <ul>
              <li><a href='#'>Imprint</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
