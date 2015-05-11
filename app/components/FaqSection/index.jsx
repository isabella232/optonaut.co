'use strict';

import React from 'react';

require('./index.less');

export default class FaqSection extends React.Component {
  render() {
    return (
      <div id='section-faq'>
        <div className='container' id='section-faq-content'>
          <h2>We Have Your Answers</h2>
          <div className='row'>
            <div className='one-half column'>
              <strong>What makes Optonaut different from other panorama/photosphere Apps?</strong><br/>
              Optonaut records a scene in a stereographic way. That means you can view it in 3D, as if you were there.
              You can not only look around, but also perceive depth and dimension.
            </div>
            <div className='one-half column'>
              <strong>Does Optonaut work with my smartphone?</strong><br/>
              Optonaut will work with most popular Android and iOS devices.
              The minimum requirements are having a camera and orientation sensors.
            </div>
          </div>
          <div className='row'>
            <div className='one-half column'>
              <strong>When will Optonaut be publicly available?</strong><br/>
              Optonaut for Android will be released in August 2015.
              The iOS version will be released two months later
            </div>
            <div className='one-half column'>
              <strong>What is Optonaut going to cost?</strong><br/>
              Optonaut will be free. We sell your data instead. Just kidding. :)
            </div>
          </div>
          <div className='row'>
            <div className='one-half column'>
              <strong>What data is transmitted to your servers when stitching? </strong><br/>
              The images including orientation data of your phone.
              At the moment we need to transmit those data since the 3D conversion process is very battery consuming.
              If we find a way around that we’ll let you know.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
