'use strict'

import React from 'react'
import HeadParams from '../../lib/HeadParams'

export default class Html extends React.Component {

  render() {
    const markup = this.props.markup
    return (
      <html>
        <head>
          <title>{this.props.headParams.title}</title>

          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta name='description' content={this.props.headParams.description} />
          <meta name='robots' />
          <meta name='viewport' content='initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width' />

          <link rel='shortcut icon' type='image/png' href='/images/favicon-32x32.png' sizes='32x32' />
          <link href='/style.css' media='all' rel='stylesheet' />

        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: markup}}></div>
        </body>
        <script src={`/bundle.${this.props.scriptHash}.js`} async></script>
        <script dangerouslySetInnerHTML={{__html: `
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
          ga('create','UA-62427242-1','auto');
          ga('send','pageview');
          ga('set', 'anonymizeIp', true);
        `}} />
      </html>
    )
  }

}

Html.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired,
    scriptHash: React.PropTypes.string.isRequired,
    markup: React.PropTypes.string.isRequired
}
