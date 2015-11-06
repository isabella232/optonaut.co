'use strict'

import React from 'react'
import { findDOMNode } from 'react-dom'
import styles from './index.scss'

export default class DiscoverSection extends React.Component {

  componentDidMount() {
    const iphone = findDOMNode(this.refs.iphone)

    function resizeImage() {
      iphone.height = iphone.width * 498 / 1015
    }

    // timeout needed for safari
    setTimeout(resizeImage, 0)
    window.addEventListener('resize', resizeImage)
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.headline}>
          <h2><strong>Discover fascinating places</strong> <br />all around the world </h2>
        </div>
        <div className={styles.wrapper}>
          <img ref='iphone' className={styles.iphone} src={require('./vrglasses.png')} />
        </div>
        <div className={styles.foot}>
          <div className='container'>
            Optonaut gives you an <strong>immersive viewing experience</strong> and works with most VR glasses
          </div>
        </div>
      </div>
    )
  }
}
