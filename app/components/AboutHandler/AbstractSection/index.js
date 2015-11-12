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
              <strong>Everyone should be able to capture, share and re-live moments using virtual reality.</strong><br/>
              Over the last few years, viewing VR images and 360° videos became increasingly popular. However, creating your own VR content is not easy, and requires special hardware. This is what we set out to change with Optonaut. The next time you go on vacation or visit a special place, you can not only show your loved ones a picture of it, but let them experience exactly what you did.
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
