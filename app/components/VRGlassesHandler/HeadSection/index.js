import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class HeadSection extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>There'll be <strong>a billion people</strong> <br />wearing VR glasses</h1>
      </div>
    )
  }
}
