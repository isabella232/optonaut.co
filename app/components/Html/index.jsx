'use strict';

import React from 'react';
import HeadParams from '../../lib/HeadParams';

export default class Html extends React.Component {

  render() {
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
        <body dangerouslySetInnerHTML={{__html: this.props.markup}} />
        <script src={`/bundle.${this.props.scriptHash}.js`} async></script>
        <script dangerouslySetInnerHTML={{__html: `
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-62427242-1','auto');ga('send','pageview');ga('set', 'anonymizeIp', true);
        `}} />
      </html>
    );
  }

}

Html.propTypes = {
    headParams: React.PropTypes.instanceOf(HeadParams).isRequired,
    scriptHash: React.PropTypes.string.isRequired,
    markup: React.PropTypes.string.isRequired
};
