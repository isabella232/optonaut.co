'use strict';

import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

require('./index.less');

export default class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shrink: window.scrollY > 40,
      navToggled: false
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

  _toggleNav() {
    this.setState({ navToggled: !this.state.navToggled });
  }

  _scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const cx = classnames({
      shrink: this.state.shrink,
      toggled: this.state.navToggled
    });
    return (
      <div className={cx} id='navbar'>
        <div className='container' id='navbar-wrapper'>
          <div className='icon' id='navbar-logo'><Link to='home' onClick={this._scrollToTop}/></div>
          <div id='navbar-nav'>
            <a className='navbar-nav-default' href="/#section-process">How It Works</a>
            <Link to='login' className='navbar-nav-default'>Login</Link>
            <a className='navbar-nav-special' href='https://www.kickstarter.com/projects/optonaut/optonaut-virtual-reality-photography'>I Want This</a>
          </div>
          <div onClick={this._toggleNav.bind(this)} className='show-small icon' id='navbar-menu'></div>
        </div>
      </div>
    );
  }

}
