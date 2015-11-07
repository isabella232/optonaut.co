import React from 'react'
import Helmet from 'react-helmet'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import Routes from './components/Routes'
import Html from './components/Html'

module.exports = {

  routes: Routes,

  routeToString: function(path, scriptHash, callback) {

    match({ routes: Routes, location: path }, function(error, redirectLocation, renderProps) {
      const bodyElement = (
        <RoutingContext {...renderProps} />
      )
      const bodyHtml = renderToString(bodyElement)
      const head = Helmet.rewind()
      const htmlElement = (
        <Html markup={bodyHtml} head={head} scriptHash={scriptHash} />
      )
      const html = renderToStaticMarkup(htmlElement)

      callback(html)
    })
  }
}
