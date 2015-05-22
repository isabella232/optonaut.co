'use strict';

import React from 'react';

export default class KickstarterHandler extends React.Component {

  constructor(props) {
    super(props);
    window.location.replace('https://www.kickstarter.com/projects/optonaut/optonaut-virtual-reality-photography');
  }

  render() {
    return (
      <div></div>
    );
  }
}
