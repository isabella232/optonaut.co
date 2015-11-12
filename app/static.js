import React from 'react'
import Helmet from 'react-helmet'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import { minify } from 'html-minifier'
import Routes from './components/Routes'
//import Html from './components/Html'

function renderHTML(appHTML, head, scriptHash) {
  return `
    <html xmlns='http://www.w3.org/1999/xhtml' xmlns:fb='http://ogp.me/ns/fb#'>
      <head>
        ${head.title.toString()}
        ${head.meta.toString()}
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name="p:domain_verify" content="da46c60052e4fdbdc183e6e56d1e9d79"/> <!-- Pinterest -->
        <meta name='robots' />
        <meta name='viewport' content='initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width' />

        <link rel='shortcut icon' type='image/png' href='/images/favicon-32x32.png' sizes='32x32' />
        <link href='/style.css' media='all' rel='stylesheet' />

      </head>
      <body>
        <div id='app'>${appHTML}</div>
      </body>
      <script src='/bundle.${scriptHash}.js' async></script>
      <script>
          (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
          function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
          e=o.createElement(i);r=o.getElementsByTagName(i)[0];
          e.src='https://www.google-analytics.com/analytics.js';
          r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
          ga('create','UA-62427242-1','auto');ga('send','pageview');ga('set', 'anonymizeIp', true);
      </script>
    </html>
    `
}

module.exports = {

  routes: Routes,

  routeToString: function(path, scriptHash, callback) {

    match({ routes: Routes, location: path }, function(error, redirectLocation, renderProps) {
      const appElement = (
        <RoutingContext {...renderProps} />
      )
      const appHtml = renderToString(appElement)
      const head = Helmet.rewind()
      const html = renderHTML(appHtml, head, scriptHash)
      const minifyOptions = {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        removeComments: true,
      }

      callback(minify(html, minifyOptions))
    })
  }

}
