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
            <p>Our journey began in 2014, when the concept of Optonaut won the biggest Hackathon in Europe. All of the positive feedback inspired us to take Optonaut to the next level. Since then, it’s been an incredible ride, and we are working hard every day to make our vision a <strike>virtual</strike> reality.</p>
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
                  Johannes built his first startup at the age of 17, where he learned all what it takes to turn an idea to a business. Having a degree in computer science and a background in design combined with his obsession for virtual reality, Optonaut was the next logical step.
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
                  After finishing his thesis in computer science at CMU, Emanuel was working at several startups. His deep understanding of computer vision combined with his experience as a professional photographer makes him the perfect fit to develop the core technology of Optonaut.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
