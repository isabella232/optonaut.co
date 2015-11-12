import Helmet from 'react-helmet'
import React from 'react'

export default class NotFoundHandler extends React.Component {
  render() {
    return (
      <div className='container'>
        <Helmet title='404' />
        <br/>
        <br/>
        404. Damn.
        <br/>
        <br/>
      </div>
    )
  }
}
