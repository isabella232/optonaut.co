'use strict';

import React from 'react';
import HomeSection from '../HomeSection';
import NavBar from '../NavBar';

require('./index.less');

let App = React.createClass({
  render() {
    return (
      <div className='container'>
        <NavBar/>
        <HomeSection/>
      </div>
    );
  }
});

module.exports = App;
