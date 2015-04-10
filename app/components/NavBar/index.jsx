'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./index.less');

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shrink: window.scrollY > 40
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this._onScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll() {
    const shrink = window.scrollY > 40;
    if (shrink !== this.state.shrink) {
      this.setState({ shrink });
    }
  }

  _scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={this.state.shrink ? 'shrink' : ''} id='navbar'>
        <div className='container' id='navbar-wrapper'>
          <div className='icon' id='navbar-logo'><Link to='home' onClick={this._scrollToTop}/></div>
          <div className='hide-small' id='navbar-nav'>
            <a className='navbar-nav-default' href="/#section-process">How It Works</a>
            <Link to='login' className='navbar-nav-default'>Login</Link>
            <a className='navbar-nav-special' href="#">Pre-Order</a>
          </div>
          <div className='show-small icon' id='navbar-menu'></div>
        </div>
      </div>
    );
  }

}
