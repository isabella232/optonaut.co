'use strict'

import React from 'react'
import HeadParams from '../../../lib/HeadParams'

require('./index.less')

export default class CreditsHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('Credits - Optonaut')
    this.props.headParams.setDescription('Take Virtual Reality Photographs With Your Smartphone.')
  }

  render() {
    return (
      <div id='credit'>
        <div className='container' id='credit-content'>
          <h3>Image Credits</h3>
          Flickr/Shannon McClean, <a href='https://www.flickr.com/photos/freekorps/9810411165'>Yosemite Little World</a><br />
          Flickr/eggysayoga, <a href='https://www.flickr.com/photos/eggysayoga/10536227836'>Beach Ball Indonesia</a><br />
          Flickr/Mantis of Destiny, <a href='https://www.flickr.com/photos/mantisofdestiny/3315470653'>Argentina Desert</a>
        </div>
      </div>
    )
  }
}

CreditsHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired
}
