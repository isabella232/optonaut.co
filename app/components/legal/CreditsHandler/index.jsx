'use strict';

import React from 'react';
import HeadParams from '../../../lib/HeadParams';

export default class CreditsHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Credits - Optonaut');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  render() {
    return (
      <div>
        Thanks for the pictures...
      </div>
    );
  }
}

CreditsHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
