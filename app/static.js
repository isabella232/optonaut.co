'use strict'

import React from 'react'
import Router from 'react-router'
import HeadParams from './lib/HeadParams'
import Routes from './components/Routes'
import Html from './components/Html'

module.exports = {

  routes: Routes,

  routeToString: function(path, scriptHash, callback) {
    let headParams = new HeadParams()

    Router.run(Routes, path, function (Handler, state) {
      let bodyElement = React.createFactory(Handler)({
        params: state.params,
        headParams: headParams,
        clientReady: true
      })
      var bodyHtml = React.renderToString(bodyElement)
      let htmlElement = (
        <Html markup={bodyHtml} headParams={headParams} scriptHash={scriptHash} />
      )
      var html = React.renderToStaticMarkup(htmlElement)

      callback(html)
    })
  }
}
