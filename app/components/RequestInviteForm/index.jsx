'use strict';

import React from 'react';

require('./index.less');

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

export default class RequestInviteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      invalidInput: false,
      submitted: false
    };
  }

  componentDidMount() {
    React.findDOMNode(this.refs.email).focus();
  }

  watchForEnter(e) {
    if (e.keyCode === 13) {
      this.submitInviteRequest();
    }
  }

  submitInviteRequest() {
    const email = React.findDOMNode(this.refs.email).value;
    if (email && validateEmail(email)) {
      this.setState({ submitted: true });
    } else {
      this.setState({ invalidInput: true });
      setTimeout(function() {
        this.setState({ invalidInput: false });
      }.bind(this), 500);
    }
  }

  render() {
    if (this.state.submitted) {
      return (
        <div className='container request-invite-wrapper'>
          <div className='request-invite-message'>Good News. We added you to our waiting list. <strong>You will get a notification email soon.</strong></div>
        </div>
      );
    } else {
      return (
        <div className='container request-invite-form'>
          <div className='one-half column'>
            <input className={this.state.invalidInput ? 'invalid' : ''} name='email' onKeyUp={this.watchForEnter.bind(this)} placeholder='Email' ref='email' type='email' />
          </div>
          <div className='one-half column'>
            <div className={this.props.buttonClassName + ' big-button'} onClick={this.submitInviteRequest.bind(this)}>Yes, I Want An Invite</div>
          </div>
        </div>
      );
    }
  }
}

