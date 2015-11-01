'use strict';

import React from 'react';
import styles from './index.scss';

export default class FaqSection extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.headline}>
          <h2><strong>Questions?</strong> We have the answer.</h2>
        </div>
      </div>
    );
  }
}

      //<div id='section-faq'>
        //<div className='container' id='section-faq-content'>
          //<div className='row'>
            //<div className='one-half column'>
              //<strong>What's the difference to other panorama apps?</strong><br/>
              //Optonaut produces stereoscopic images. That means you can view your pictures in 3D. You can look around and get a sense of depth of the scene.
            //</div>
            //<div className='one-half column'>
              //<strong>Does Optonaut work with my smartphone?</strong><br/>
              //At the moment we are supporting the iPhone 5 and newer iPhones. Android devices will be supported in the near future as well.
            //</div>
          //</div>
          //<div className='row'>
            //<div className='one-half column'>
              //<strong>When will Optonaut be released?</strong><br/>
              //Optonaut for iOS is currently in public beta. The final version will be released in December 2015.
            //</div>
            //<div className='one-half column'>
              //<strong>What is Optonaut going to cost?</strong><br/>
              //Optonaut is a free app which you can download on the App Store.
            //</div>
          //</div>
        //</div>
      //</div>

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
