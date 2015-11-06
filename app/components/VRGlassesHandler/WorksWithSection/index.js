import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class WorksWithSection extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.image}>
            <img src={require('./badge.png')} />
          </div>
          <div className={styles.text}>
            <strong>Optonaut works with most available mobile-based VR headsets</strong><br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
        </div>
      </div>
    )
  }
}
