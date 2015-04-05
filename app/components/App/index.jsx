'use strict';

import React from 'react';

require('./index.less');

let App = React.createClass({
  render() {
    return (
      <div>
        <div className='icon' id='logo'></div>
        <h2>Hello Optonaut</h2>
      </div>
    );
  }
});

module.exports = App;
