'use strict';

import React from 'react';
import { findDOMNode } from 'react-dom';
import styles from './index.scss';

export default class DiscoverSection extends React.Component {

  componentDidMount() {
    const iphone = findDOMNode(this.refs.iphone);
    // needed for safari
    setTimeout(function() {
      iphone.height = iphone.width * 498 / 1015;
    }, 0);
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.headline}>
          <h2><strong>Discover fascinating places</strong> all around the world </h2>
        </div>
        <div className={styles.wrapper}>
          <img ref='iphone' className={styles.iphone} src={require('../../../assets/images/iphone.svg')} />
        </div>
        <div className={styles.foot}>
          <div className='container'>
            Optonaut gives you an <strong>immersive viewing experience</strong> and works with most VR glasses*
          </div>
        </div>
      </div>
    );
  }
}

