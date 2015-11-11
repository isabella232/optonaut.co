import React from 'react'
import Helmet from 'react-helmet'
import HomeSection from './HomeSection'
import RecordSection from './RecordSection'
import DiscoverSection from './DiscoverSection'
import ReviewsSection from './ReviewsSection'
import FaqSection from './FaqSection'

export default class HomeHandler extends React.Component {

  render() {
    return (
      <div>
        <Helmet
          title='Optonaut - Instagram for VR'
          titleTemplate='%s'
          meta={[
            {'property': 'og:image', 'content': require('./HomeSection/london.jpg')}
          ]}
          />
        <HomeSection />
        <RecordSection />
        <DiscoverSection />
        <ReviewsSection />
        <FaqSection />
      </div>
    )
  }

}
