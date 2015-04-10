'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import NavBar from '../NavBar';
import Footer from '../Footer';
import HeadParams from '../../lib/HeadParams';

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <RouteHandler headParams={this.props.headParams}/>
        <Footer/>
      </div>
    );
  }

}

Layout.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
};
