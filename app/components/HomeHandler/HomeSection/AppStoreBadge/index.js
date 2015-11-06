import React from 'react'
import styles from './index.scss'

export default class AppStoreBadge extends React.Component {
  render() {
    return (
      <div className={styles.appstorebadge}>
        <div className={styles.text}>
          <div className={styles.line1}>Available on the</div>
          <div className={styles.line2}>App Store</div>
        </div>
        <div className={styles.iphone}>
          <div className={styles.earpiece} />
          <div className={styles.screen} />
          <div className={styles.button} />
        </div>
      </div>
    )
  }
}
