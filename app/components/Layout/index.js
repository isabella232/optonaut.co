import React from 'react'
import Helmet from 'react-helmet'
import NavBar from '../NavBar'
import Footer from '../Footer'

require('./index.scss')

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Helmet
          titleTemplate='%s  - Optonaut'
          meta={[
            {"name": "description", "content": "Virtual reality pictures with your smartphone"},
            {"property": "og:type", "content": "article"}
          ]}
        />
        <NavBar />
        <div id='content'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }

}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired
}
