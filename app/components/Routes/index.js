'use strict'

import React from 'react'
import { createRoutes, Route, IndexRoute, NotFoundRoute } from 'react-router'
import Layout from '../Layout'
import HomeHandler from '../HomeHandler'
import AboutHandler from '../AboutHandler'
//import LoginHandler from '../LoginHandler'
//import TeamHandler from '../about/TeamHandler'
//import PressHandler from '../about/PressHandler'
//import ImprintHandler from '../legal/ImprintHandler'
//import CreditsHandler from '../legal/CreditsHandler'
//import TermsHandler from '../legal/TermsHandler'
//import NotFoundHandler from '../NotFoundHandler'

module.exports = (
  <Route path='/' component={Layout}>
    <IndexRoute component={HomeHandler} />
    <Route path='about' component={AboutHandler} />
  </Route>
)

//var routes = (
  //<Route name='appBody' path='/' handler={Layout}>
    //<DefaultRoute name='home' handler={HomeHandler}/>
    //<Route name='login' path='login/' handler={LoginHandler}/>
    //<Route name='about-team' path='about/team/' handler={TeamHandler}/>
    //<Route name='about-press' path='about/press/' handler={PressHandler}/>
    //<Route name='legal-imprint' path='legal/imprint/' handler={ImprintHandler}/>
    //{[><Route name='legal-credits' path='legal/credits/' handler={CreditsHandler}/><]}
    //<Route name='legal-terms' path='terms/' handler={TermsHandler}/>
    //<NotFoundRoute name='not-found' handler={NotFoundHandler}/>
  //</Route>
//)


//module.exports = routes
