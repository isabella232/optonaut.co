import React from 'react'
import jsonp from 'jsonp'
import classnames from 'classnames'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import styles from './index.scss'

function validateEmail(email) {
    const re = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
    return re.test(email)
}

export default class FaqSection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      invalidEmail: false,
      submitted: false,
      loading: false,
      msg: null,
    }
  }

  watchForEnter(e) {
    if (e.keyCode === 13) {
      this.submitInviteRequest()
    }
  }

  submitInviteRequest() {
    const email = findDOMNode(this.refs.email).value
    if (email && validateEmail(email)) {
      this.setState({
        loading: true,
        msg: 'Hang in there for a second',
      })

      const url = `//optonaut.us11.list-manage.com/subscribe/post-json?u=752f6c042ab41f6225f03ca59&id=905e7fc786&EMAIL=${email}&subscribe=Subscribe`

      const cb = function(err, data) {
        if (data) {
          this.setState({
            submitted: true,
            msg: data.msg,
          })
        }

        this.setState({ loading: false })
      }.bind(this)

      jsonp(url, { param: 'c' }, cb)

    } else {
      this.setState({ invalidEmail: true })
      setTimeout(function() {
        this.setState({ invalidEmail: false })
      }.bind(this), 500)
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.headline}>
          <h2><strong>Questions?</strong> <br />We have the answer.</h2>
        </div>
        <div className='container'>
          <div className={styles.question}>
            <strong>How is it different to other panorama apps?</strong>
            <p>Optonaut captures scenes in stereoscopic 3D. That means you can look around and get a sense of depth of the scene.</p>
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
            <p>Not yet, but we are already working on a solution for this. And the best news: The recording process will stay the same.</p>
          </div>
        {/*<div className={styles.button}>
            Didn't answer your question?
            <a href='mailto:hello@optonaut.co'>Ask us anything</a>
          </div>*/}
          <div className={styles.button}>
            <input className={classnames({ 'invalid': this.state.invalidEmail})} name='email' onKeyUp={this.watchForEnter.bind(this)} placeholder='Your email address' ref='email' type='email' />
            <span className={styles.submit} href='#' onClick={this.submitInviteRequest.bind(this)}>Stay up to date</span>
            <div className={styles.message} dangerouslySetInnerHTML={{__html: this.state.msg}} />
          </div>
        </div>
      </div>
    )
  }
}
