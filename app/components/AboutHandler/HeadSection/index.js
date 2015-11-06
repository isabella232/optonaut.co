import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class HeadSection extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>We let people <strong>capture the world</strong> as they see it</h1>
      </div>
    )
  }
}
