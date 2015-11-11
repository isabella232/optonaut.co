'use strict'

import { Link } from 'react-router'
import React from 'react'
import styles from './index.scss'

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.logo}>
            <Link to='/' />
          </div>
          <div className={styles.nav}>
            <ul>
              <li><Link to='/about' activeClassName='active'>About</Link></li>
              <li><Link to='/vr-glasses' activeClassName='active'>VR</Link></li>
              <li><a href='http://blog.optonaut.co'>Blog</a></li>
              <li><Link to='/terms' activeClassName='active'>Terms</Link></li>
              <li><Link to='/contact' activeClassName='active'>Contact</Link></li>
            </ul>
          </div>
          <div className={styles.social}>
            <a href='https://www.facebook.com/optonautVR' title='Facebook' />
            <a href='https://twitter.com/optonautVR' title='Twitter' />
            <a href='https://instagram.com/optonaut' title='Instagram' />
          </div>
        </div>
      </div>
    )
  }
}
