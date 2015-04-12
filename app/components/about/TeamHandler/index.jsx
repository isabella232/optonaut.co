'use strict';

import React from 'react';
import HeadParams from '../../../lib/HeadParams';

require('./index.less');

export default class TeamHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Team - Optonaut');
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.');
  }

  render() {
    return (
      <div id='team'>
        <div className='container' id='team-content'>
          <h3>Team</h3>
        </div>
      </div>
    );
  }
}

TeamHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
