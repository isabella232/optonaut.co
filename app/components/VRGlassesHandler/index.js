import React from 'react'
import HeadSection from './HeadSection'
import WorksWithSection from './WorksWithSection'
import RecommendationSection from './RecommendationSection'
import ComingSoonSection from './ComingSoonSection'
import HeadParams from '../../lib/HeadParams'

export default class VRGlassesHandler extends React.Component {

  componentWillMount() {
    this.props.headParams.setTitle('About - Optonaut')
    this.props.headParams.setDescription('Take Virtual Reality pictures using your phone and share them with your friends.')
  }

  render() {
    return (
      <div>
        <HeadSection />
        <WorksWithSection />
        <RecommendationSection />
        <ComingSoonSection />
      </div>
    )
  }
}

VRGlassesHandler.propTypes = {
  headParams: React.PropTypes.instanceOf(HeadParams)
}
