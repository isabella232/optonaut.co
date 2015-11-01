'use strict';

import React from 'react';
import styles from './index.scss';

export default class RecordSection extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.headline}>
          <h2>It has never been easier to <strong>capture scenes in 3D</strong></h2>
        </div>
        <div className='container'>
          <div className={`${styles.wrapper} row`}>
            <div className={styles.left}>
              <img src={require('../../../assets/images/record.jpg')} />
            </div>
            <div className={styles.right}>
              <ul>
                <li>Super <strong>simple recording</strong></li>
                <li>No additional hardware</li>
                <li>Stereoscopic 3D images</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

