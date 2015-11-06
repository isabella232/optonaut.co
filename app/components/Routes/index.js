'use strict'

import React from 'react'
import {
  createRoutes,
  Route,
  IndexRoute,
  NotFoundRoute,
  Redirect,
} from 'react-router'
import Layout from '../Layout'
import HomeHandler from '../HomeHandler'
import AboutHandler from '../AboutHandler'
import VRGlassesHandler from '../VRGlassesHandler'
import ContactHandler from '../ContactHandler'
import TermsHandler from '../TermsHandler'
import NotFoundHandler from '../NotFoundHandler'

module.exports = (
  <Route path='/' component={Layout}>
    <IndexRoute component={HomeHandler} />
    <Route path='about' component={AboutHandler} />
    <Route path='vr-glasses' component={VRGlassesHandler} />
    <Redirect from='glasses' to='vr-glasses' />{/* Needed for old iOS version. Can be removed with v12 */}
    <Route path='contact' component={ContactHandler} />
    <Redirect from='legal/imprint' to='contact' />{/* Needed for old website */}
    <Route path='terms' component={TermsHandler} />
    <Redirect from='legal/terms' to='terms' />{/* Needed for old website */}
    <Route path='*' component={NotFoundHandler} />
  </Route>
)

//var routes = (
  //<Route name='appBody' path='/' handler={Layout}>
    //<DefaultRoute name='home' handler={HomeHandler}/>
    //<Route name='login' path='login/' handler={LoginHandler}/>
    //<Route name='about-team' path='about/team/' handler={TeamHandler}/>
    //<Route name='about-press' path='about/press/' handler={PressHandler}/>
    //<Route name='legal-imprint' path='legal/imprint/' handler={ImprintHandler}/>
    //<Route name='legal-terms' path='terms/' handler={TermsHandler}/>
    //<NotFoundRoute name='not-found' handler={NotFoundHandler}/>
  //</Route>
//)


//module.exports = routes
