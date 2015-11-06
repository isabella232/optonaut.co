import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class WorksWithSection extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <h2>Coming soon</h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    )
  }
}
