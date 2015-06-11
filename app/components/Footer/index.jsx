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
              <a href='https://www.facebook.com/optonaut.io' title='Facebook'><span className='icon' id='footer-facebook'></span></a>
              <a href='https://twitter.com/optonautVR' title='Twitter'><span className='icon' id='footer-twitter'></span></a>
              <a href='https://plus.google.com/u/0/communities/107176026716713260575' title='Google Plus'><span className='icon' id='footer-google'></span></a>
              <a href='https://www.youtube.com/channel/UCMOrtW69qlaiwh4VzlXAZpA' title='Youtube'><span className='icon' id='footer-youtube'></span></a>
              <a href='https://instagram.com/optonaut/' title='Instagram'><span className='icon' id='footer-instagram'></span></a>
              <a href='https://github.com/optonaut/' title='Github'><span className='icon' id='footer-github'></span></a>
            </div>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li><a href='http://blog.optonaut.com'>Blog</a></li>
              <li><Link to='about-team'>Team</Link></li>
              <li><Link to='about-press'>Press</Link></li>
            </ul>
          </div>
          <div>
            <h5>Hardware</h5>
            <ul>
              <li><a href='http://durovis.com'>Durovis Dive</a></li>
              <li><a href='http://www.kula3d.com'>Kula3D</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><Link to='legal-imprint'>Imprint</Link></li>
              <li><Link to='legal-credits'>Credits</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
