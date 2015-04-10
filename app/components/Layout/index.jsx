'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import NavBar from '../NavBar';
import Footer from '../Footer';

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
  }

}
