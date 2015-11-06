import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class HeadSection extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.left}>
            <p>
              <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</strong><br/>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className={styles.right}>
            <a href='mailto:hello@optonaut.co'>Contact us</a>
            <a href='#'>Press information</a>
          </div>
        </div>
      </div>
    )
  }
}