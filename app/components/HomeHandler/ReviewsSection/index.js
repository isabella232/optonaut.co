'use strict';

import React from 'react';
import styles from './index.scss';

export default class ReviewsSection extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.headline}>
          <h2><strong>What people love</strong> about Optonaut</h2>
        </div>
        <div className='container'>
          <div className={styles.review}>
            <img src={require('../../../assets/images/alex.jpg')} /> “Amazing! It’s like Instagram for Virtual Reality.”
          </div>
          <div className={styles.points}>
            <span className={`${styles.point} active`} />
            <span className={styles.point} />
            <span className={styles.point} />
          </div>
        </div>
      </div>
    );
  }
}

