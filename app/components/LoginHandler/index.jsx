'use strict';

import React from 'react';
import HeadParams from '../../lib/HeadParams';

export default class LoginHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Login - Optonaut');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        Wow you’re really curious, are you? You can not login here at this moment but you can request an invite.
      </div>
    );
  }
}

LoginHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
