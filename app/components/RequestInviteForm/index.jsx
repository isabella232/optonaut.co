'use strict';

import React from 'react';

require('./index.less');

function validateEmail(email) {
    const re = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    return re.test(email);
}

export default class RequestInviteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      invalidInput: false,
      submitted: false,
      loading: false
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
      this.setState({ loading: true });

      var request = new XMLHttpRequest();
      var url = 'https://api-v5-production.optonaut.co/persons/request-invite';

      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/json');

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          this.setState({ submitted: true });
        }

        this.setState({ loading: false });

      }.bind(this);

      var data = JSON.stringify({ email });
      request.send(data);

    } else {
      this.setState({ invalidInput: true });
      setTimeout(function() {
        this.setState({ invalidInput: false });
      }.bind(this), 500);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className='container request-invite-wrapper'>
          <div className='request-invite-message'><strong>Hold on.</strong></div>
        </div>
      );
    } else if (this.state.submitted) {
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

