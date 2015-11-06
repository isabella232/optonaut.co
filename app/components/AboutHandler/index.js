import React from 'react'
import HeadSection from './HeadSection'
import AbstractSection from './AbstractSection'
import TeamSection from './TeamSection'
import HeadParams from '../../lib/HeadParams'

export default class AboutHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('About - Optonaut')
    this.props.headParams.setDescription('Take Virtual Reality pictures using your phone and share them with your friends.')
  }

  render() {
    return (
      <div>
        <HeadSection />
        <AbstractSection />
        <TeamSection />
      </div>
    )
  }
}

AboutHandler.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams)
}
