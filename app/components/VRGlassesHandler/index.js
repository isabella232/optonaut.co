import React from 'react'
import Helmet from 'react-helmet'
import HeadSection from './HeadSection'
import WorksWithSection from './WorksWithSection'
import RecommendationSection from './RecommendationSection'
import ComingSoonSection from './ComingSoonSection'

export default class VRGlassesHandler extends React.Component {

  render() {
    return (
      <div>
        <Helmet title='VR Glasses' />
        <HeadSection />
        <WorksWithSection />
        <RecommendationSection />
        <ComingSoonSection />
      </div>
    )
  }
}
