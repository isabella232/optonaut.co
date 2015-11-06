import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import HeadParams from './lib/HeadParams'
import Routes from './components/Routes'
import Html from './components/Html'

module.exports = {

  routes: Routes,

  routeToString: function(path, scriptHash, callback) {
    const headParams = new HeadParams()

    match({ routes: Routes, location: path }, function(error, redirectLocation, renderProps) {
      const bodyElement = (
        <RoutingContext {...renderProps} headParams={headParams} />
      )
      const bodyHtml = renderToString(bodyElement)
      const htmlElement = (
        <Html markup={bodyHtml} headParams={headParams} scriptHash={scriptHash} />
      )
      const html = renderToString(htmlElement)

      callback(html)
    })
  }
}
