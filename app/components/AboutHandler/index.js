import React from 'react'
import Helmet from 'react-helmet'
import HeadSection from './HeadSection'
import AbstractSection from './AbstractSection'
import TeamSection from './TeamSection'

export default class AboutHandler extends React.Component {

  render() {
    return (
      <div>
        <Helmet title='Optonaut' />
        <HeadSection />
        <AbstractSection />
        <TeamSection />
      </div>
    )
  }
}
