'use strict';

import React from 'react';

require('./index.less');

let NavBar = React.createClass({
  render() {
    return (
      <div id='navbar'>
        <div className='container' id='navbar-wrapper'>
          <div className='icon' id='navbar-logo'></div>
          <div className='hide-small' id='navbar-nav'>
            <a className='navbar-nav-default' href="#">How It Works</a>
            <a className='navbar-nav-default' href="#">Login</a>
            <a className='navbar-nav-special' href="#">Pre-Order</a>
          </div>
          <div className='show-small icon' id='navbar-menu'></div>
        </div>
      </div>
    );
  }
});

module.exports = NavBar;
