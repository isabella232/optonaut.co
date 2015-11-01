'use strict';

import React from 'react';
import { findDOMNode } from 'react-dom';
import styles from './index.scss';

export default class HomeSection extends React.Component {

  componentDidMount() {
    //if (window.innerWidth >= 750) {
    if (false) {
      const backgroundVideo = findDOMNode(this.refs.backgroundVideo);
      const footBackgroundVideo = findDOMNode(this.refs.footBackgroundVideo);
      let callbackCount = 0;
      let callback = function() {
        if (++callbackCount === 2) {
          backgroundVideo.play();
          footBackgroundVideo.play();
          backgroundVideo.oncanplay = null;
          footBackgroundVideo.oncanplay = null;
        }
      };
      backgroundVideo.oncanplay = callback;
      footBackgroundVideo.oncanplay = callback;
    }
  }

  render() {
    let backgroundVideo, footBackgroundVideo;
    //if (window.innerWidth >= 750) {
    if (false) {
      backgroundVideo = (
        <video className={styles.video} ref='backgroundVideo' loop>
          <source src='http://static.optonaut.io.s3.amazonaws.com/home.mp4' type='video/mp4'/>
        </video>
      );
      footBackgroundVideo = (
        <video className={styles.video} ref='footBackgroundVideo' loop>
          <source src='http://static.optonaut.io.s3.amazonaws.com/home-blur.mp4' type='video/mp4'/>
        </video>
      );
    }

    return (
      <div className={styles.root}>
        <div className={styles.background}>{backgroundVideo}</div>
        <div className={styles.headline}>
          <h1><strong>Virtual Reality Pictures</strong> with your Smartphone</h1>
        </div>
        <div className={styles.foot}>
          <div className={styles.footBackground}>
            <div className={styles.footBackgroundImage} />
            {footBackgroundVideo}
          </div>
          <div className='container'>
            <div className={`${styles.footWrapper} row`}>
              <div className={styles.footLeft}>
                <div className={styles.footTextBig}>
                  Optonaut is a <strong>free app</strong> and works with <strong>most VR glasses</strong>
                </div>
                <div className={styles.footTextSmall}>
                  The best way to discover, capture and share unique moments and beautiful places just using your phone
                </div>
              </div>
              <div className={styles.footRight}>
                <a href='https://itunes.apple.com/us/app/optonaut/id1013817652'>
                  <img src={require('../../../assets/images/app-store.svg')} />
                </a>
                <a className={styles.footPlayStore} href='#'>
                  <img src={require('../../../assets/images/play-store.svg')} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

