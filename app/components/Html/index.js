import React from 'react'

export default class Html extends React.Component {

  render() {
    const markup = this.props.markup
    return (
      <html>
        <head>
          {this.props.head.title.toComponent()}
          {this.props.head.meta.toComponent()}
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta name="p:domain_verify" content="da46c60052e4fdbdc183e6e56d1e9d79"/> {/* Pinterest */}
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
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-62427242-1','auto');ga('send','pageview');ga('set', 'anonymizeIp', true);
        `}} />
      </html>
    )
  }

}

Html.propTypes = {
  head: React.PropTypes.object.isRequired,
  scriptHash: React.PropTypes.string.isRequired,
  markup: React.PropTypes.string.isRequired
}
