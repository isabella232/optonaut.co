import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class HeadSection extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className={styles.root}>
          <div className={styles.head}>
            <h2>Who we are</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className={styles.team}>
            <div className={styles.person}>
              <div className={styles.personPicture}>
                <img src={require('./johannes.jpg')} />
              </div>
              <div className={styles.personInfo}>
                <div className={styles.personName}>
                  <strong>Johannes Schickling</strong>, Co-founder
                </div>
                <div className={styles.personBio}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </div>
              </div>
            </div>
            <div className={styles.person}>
              <div className={styles.personPicture}>
                <img src={require('./emanuel.jpg')} />
              </div>
              <div className={styles.personInfo}>
                <div className={styles.personName}>
                  <strong>Emanuel Jöbstl</strong>, Co-founder
                </div>
                <div className={styles.personBio}>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
