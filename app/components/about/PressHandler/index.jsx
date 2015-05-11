'use strict';

import React from 'react';
import HeadParams from '../../../lib/HeadParams';

require('./index.less');

export default class PressHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Press - Optonaut');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  render() {
    return (
      <div id='press'>
        <div className='container' id='press-content'>
          <h3>Press</h3>
          <p>You can download our press-kit <a href='http://static.optonaut.io.s3.amazonaws.com/presskit.zip'>here</a>.</p>
        </div>
      </div>
    );
  }
}

PressHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
