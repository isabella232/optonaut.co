import React from 'react'
import { Link } from 'react-router'
import styles from './index.scss'

export default class FaqSection extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.headline}>
          <h2><strong>Questions?</strong> <br />We have the answer.</h2>
        </div>
        <div className='container'>
          <div className={styles.question}>
            <strong>How is it different to other panorama apps?</strong>
            <p>Optonaut captures scenes in stereoscopic 3D. That means can look around and get a sense of depth of the scene.</p>
          </div>
          <div className={styles.question}>
            <strong>Does Optonaut work with my smartphone?</strong>
            <p>At the moment we are supporting the iPhone 5 and newer iPhones. Android devices will be supported in the near future as well.</p>
          </div>
          <div className={styles.question}>
            <strong>Do I need VR glasses to use Optonaut?</strong>
            <p>No, while you can also view Optographs without VR glasses we strongly recommend <Link to='/vr-glasses'>getting some</Link>. Luckily recording works without any additional hardware.</p>
          </div>
          <div className={styles.question}>
            <strong>Can I also record VR videos?</strong>
            <p>Not yet, but we are already working on a solution for this. And the best news: the recording process will stay the same.</p>
          </div>
          <div className={styles.button}>
            Didn't answer your question?
            <a href='mailto:hello@optonaut.co'>Ask us anything</a>
          </div>
        </div>
      </div>
    )
  }
}
