'use strict';

import React from 'react';
import HeadParams from '../../../lib/HeadParams';

export default class ImprintHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Imprint - Optonaut');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        Someone has to write our legal stuff...
      </div>
    );
  }
}

ImprintHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
