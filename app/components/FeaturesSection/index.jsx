'use strict';

import React from 'react';

require('./index.less');

export default class FeaturesSection extends React.Component {
  render() {
    return (
      <div id='section-features'>
        <div className='container' id='section-features-content'>
          <h2>Create And Share Virtual Reality Content</h2>
          <p>Have you ever felt that <strong>there was something missing in your pictures</strong> - that your photographs couldn’t quite describe the real scene and its atmosphere? We felt the same way. That's why we've created Optonaut.<br/>With Optonaut you can <strong>record, view and share 3D panoramas</strong>. Dive into your pictures and explore unique places in Virtual Reality.</p>
          <div className='row' id='section-features-list'>
            <div className='one-third column'>
              <div className='icon' id='section-features-feature1'></div>
              <span>Easy Capturing Process</span>
            </div>
            <div className='one-third column'>
              <div className='icon' id='section-features-feature2'></div>
              <span>Full 360° In Real 3D</span>
            </div>
            <div className='one-third column'>
              <div className='icon' id='section-features-feature3'></div>
              <span>Works With Any VR Glasses</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
