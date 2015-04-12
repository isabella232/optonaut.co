'use strict';

import { Link } from 'react-router';
import React from 'react';

require('./index.less');

export default class Footer extends React.Component {
  render() {
    return (
      <div id='footer'>
        <div className='container' id='footer-wrapper'>
          <div>
            <div id='footer-copy'>Optonaut 2015</div>
            <div id='footer-social'>
              <a href='#' title='Facebook'><span className='icon' id='footer-facebook'></span></a>
              <a href='#' title='Twitter'><span className='icon' id='footer-twitter'></span></a>
              <a href='#' title='Google Plus'><span className='icon' id='footer-google'></span></a>
              <a href='#' title='Youtube'><span className='icon' id='footer-youtube'></span></a>
              <a href='#' title='Instagram'><span className='icon' id='footer-instagram'></span></a>
              <a href='#' title='Pinterest'><span className='icon' id='footer-pinterest'></span></a>
              <a href='#' title='Github'><span className='icon' id='footer-github'></span></a>
            </div>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li><Link to='about-team'>Team</Link></li>
              <li><Link to='about-team'>Blog</Link></li>
              <li><Link to='about-press'>Press</Link></li>
            </ul>
          </div>
          <div>
            <h5>Hardware</h5>
            <ul>
              <li><a href='#'>Pre-Order</a></li>
              <li><a href='#'>Durovis Dive</a></li>
              <li><a href='#'>Kula3D</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><Link to='legal-imprint'>Imprint</Link></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
