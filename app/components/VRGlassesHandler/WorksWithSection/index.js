import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class WorksWithSection extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.image}>
            <a href='https://www.google.com/get/cardboard/'><img src={require('./badge.png')} /></a>
          </div>
          <div className={styles.text}>
            <strong>Optonaut works with most phone-based VR headsets.</strong><br />
            A phone-based VR headset is basically a little box with lenses, that makes your smartphone’s screen cover your complete field of view. Combined with the sensors your phone already has, it allows you to look around and virtually be somewhere else.<br />
            The <a href='https://www.google.com/get/cardboard/'>Google Cardboard</a> is probably the most famous phone-based VR headset. It's inexpensive and enables everyone to easily try out this new technology. Mobile-based VR glasses have been the trigger for mainstream adoption of virtual reality.
          </div>
        </div>
      </div>
    )
  }
}
