'use strict';

import React from 'react';

require('./index.less');

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shrink: window.scrollY > 40
    };
    window.addEventListener('scroll', function() {
      const shrink = window.scrollY > 40;
      if (shrink !== this.state.shrink) {
        this.setState({ shrink });
      }
    }.bind(this));
  }

  render() {
    return (
      <div className={this.state.shrink ? 'shrink' : ''} id='navbar'>
        <div className='container' id='navbar-wrapper'>
          <div className='icon' id='navbar-logo'><a href='/'></a></div>
          <div className='hide-small' id='navbar-nav'>
            <a className='navbar-nav-default' href="#section-process">How It Works</a>
            <a className='navbar-nav-default' href="#">Login</a>
            <a className='navbar-nav-special' href="#">Pre-Order</a>
          </div>
          <div className='show-small icon' id='navbar-menu'></div>
        </div>
      </div>
    );
  }

}
