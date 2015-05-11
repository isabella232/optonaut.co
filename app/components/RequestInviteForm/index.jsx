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
      var url = 'https://api.parse.com/1/classes/invite';

      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/json');
      request.setRequestHeader('X-Parse-Application-Id', 'z17SUVXKL2JqHShB3jMSjphyMqPiCZ9nqTX7Fn7M');
      request.setRequestHeader('X-Parse-REST-API-Key', 'f3uFeCxiRQkgDWMYmMEGinF53VpIffhg1m5jWgdu');

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

