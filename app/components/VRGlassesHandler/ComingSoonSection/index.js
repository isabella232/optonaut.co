import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class WorksWithSection extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <h2>Coming soon</h2>
          <p>Of course there are many other great VR glasses as well. We're already working on a way to make Optonaut work with products like the amazing Samsung Gear VR or the famous Oculus Rift. More on this soon.</p>
        </div>
      </div>
    )
  }
}
