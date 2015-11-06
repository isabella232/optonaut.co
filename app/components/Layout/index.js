'use strict'

import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import HeadParams from '../../lib/HeadParams'

require('./index.scss')

export default class Layout extends React.Component {

  render() {
    let headParams = new HeadParams()
    let children = React.cloneElement(this.props.children, { headParams })

    return (
      <div>
        <NavBar />
        <div id='content'>
          {children}
        </div>
        <Footer />
      </div>
    )
  }

}

Layout.propTypes = {
    children: React.PropTypes.object.isRequired
}
