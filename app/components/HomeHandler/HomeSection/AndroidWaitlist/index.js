import React from 'react'
import { findDOMNode } from 'react-dom'
import jsonp from 'jsonp'
import classnames from 'classnames'
import styles from './index.scss'

function validateEmail(email) {
    const re = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
    return re.test(email)
}

export default class RequestInviteForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      invalidEmail: false,
      submitted: false,
      loading: false,
      msg: null,
    }
  }

  componentDidMount() {
    findDOMNode(this.refs.email).focus()
  }

  watchForEnter(e) {
    if (e.keyCode === 13) {
      this.submitInviteRequest()
    }
  }

  submitInviteRequest() {
    const email = findDOMNode(this.refs.email).value
    const device = findDOMNode(this.refs.device).value
    if (email && validateEmail(email)) {
      this.setState({
        loading: true,
        msg: 'Hang in there for a second',
      })

      const url = `//optonaut.us11.list-manage.com/subscribe/post-json?u=752f6c042ab41f6225f03ca59&id=5a03d1129d&EMAIL=${email}&DEVICE=${device}&subscribe=Subscribe`

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
    let form
    if (!this.state.loading && !this.state.submitted) {
      form = (
        <div className={classnames('row', styles.form)}>
          <div className='col-lg-5 col-xs-12'>
            <input className={classnames({ 'invalid': this.state.invalidEmail})} name='email' onKeyUp={this.watchForEnter.bind(this)} placeholder='Your email address' ref='email' type='email' />
          </div>
          <div className='col-lg-5 col-xs-12'>
            <input onKeyUp={this.watchForEnter.bind(this)} placeholder='Which device are you using? (optional)' ref='device' type='text' />
          </div>
          <div className={classnames('col-lg-2 col-xs-12', styles.submit)} onClick={this.submitInviteRequest.bind(this)}>I'm interested</div>
        </div>
      )
    }

    let msg
    if (this.state.msg) {
      msg = this.state.msg
    } else {
      msg = (
        <span>Android is on its way. <br/><strong>We can notify you once it's ready.</strong></span>
      )
    }

    return (
      <div className={styles.root}>
        <div className={styles.close} onClick={this.props.close} />
        <div className={styles.message}>
          {msg}
        </div>
        {form}
      </div>
    )
  }
}
