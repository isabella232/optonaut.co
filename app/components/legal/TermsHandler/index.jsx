'use strict';

import React from 'react';
import HeadParams from '../../../lib/HeadParams';

require('./index.less');

export default class TermsHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Terms & Conditions - Optonaut');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  render() {
    return (
      <div id='terms'>
        <div className='container' id='terms-content'>
          <h3>Terms</h3>
        </div>
      </div>
    );
  }
}

TermsHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
