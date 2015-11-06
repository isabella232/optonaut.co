import React from 'react'
import styles from './index.scss'

export default class PlayStoreBadge extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <img src={require('./play-store.svg')} />
      </div>
    )
  }
}
