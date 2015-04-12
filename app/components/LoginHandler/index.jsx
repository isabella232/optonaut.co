'use strict';

import React from 'react';
import HeadParams from '../../lib/HeadParams';
import RequestInviteForm from '../RequestInviteForm';

require('./index.less');

export default class LoginHandler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showInviteForm: false
    };
  }

  componentWillMount() {
    this.props.headParams.setTitle('Login - Optonaut');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  showInviteForm() {
    this.setState({ showInviteForm: true });
  }

  render() {
    let request;
    if (this.state.showInviteForm) {
      request = (
        <RequestInviteForm buttonClassName='inverse'/>
      );
    } else {
      request = (
        <div className='container'>
          <div className='big-button' onClick={this.showInviteForm.bind(this)}><span className='icon'></span>Request Invite Now</div>
        </div>
      );
    }

    return (
      <div id='login'>
        <div className='container' id='login-content'>
          <h3>All Good Things Come To Those Who Wait</h3>
          <p>Wow you’re really curious, are you? You can not login here at this time but you can request an invite.</p>
          {request}
        </div>
      </div>
    );
  }
}

LoginHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
