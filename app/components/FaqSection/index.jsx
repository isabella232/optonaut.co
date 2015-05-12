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
              <strong>What's the difference to other panorama apps?</strong><br/>
              Optonaut produces stereoscopic images. That means you can view your pictures in 3D. You can look around and get a sense of depth of the scene.
            </div>
            <div className='one-half column'>
              <strong>Does Optonaut work with my smartphone?</strong><br/>
              Optonaut will work with most popular Android and iOS devices. The minimum requirement is having a camera and orientation sensors.
            </div>
          </div>
          <div className='row'>
            <div className='one-half column'>
              <strong>When will Optonaut be released?</strong><br/>
              Optonaut for Android will be released in August 2015. The iOS version follows two months later.
            </div>
            <div className='one-half column'>
              <strong>What is Optonaut going to cost?</strong><br/>
              Optonaut will be available for free.<br/>
              We'll sell your data instead. Just kidding.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

          //<div className='row'>
            //<div className='one-half column'>
              //<strong>What data is transmitted to your servers when stitching? </strong><br/>
              //The images including orientation data of your phone.
              //At the moment we need to transmit those data since the 3D conversion process is very battery consuming.
              //If we find a way around that we’ll let you know.
            //</div>
            //<div className='one-half column'>
              //<strong>What data is transmitted to your servers when stitching?</strong><br/>
              //The images including orientation data of your phone.
              //At the moment we need to transmit those data since the 3D conversion process is very battery consuming.
              //If we find a way around that we’ll let you know.
            //</div>
          //</div>
