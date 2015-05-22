'use strict';

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import Layout from '../Layout';
import HomeHandler from '../HomeHandler';
import LoginHandler from '../LoginHandler';
import TeamHandler from '../about/TeamHandler';
import PressHandler from '../about/PressHandler';
import ImprintHandler from '../legal/ImprintHandler';
import CreditsHandler from '../legal/CreditsHandler';
import KickstarterHandler from '../KickstarterHandler';
import NotFoundHandler from '../NotFoundHandler';

var routes = (
  <Route name='appBody' path='/' handler={Layout}>
    <DefaultRoute name='home' handler={HomeHandler}/>
    <Route name='kickstarter' path='kickstarter/' handler={KickstarterHandler}/>
    <Route name='login' path='login/' handler={LoginHandler}/>
    <Route name='about-team' path='about/team/' handler={TeamHandler}/>
    <Route name='about-press' path='about/press/' handler={PressHandler}/>
    <Route name='legal-imprint' path='legal/imprint/' handler={ImprintHandler}/>
    <Route name='legal-credits' path='legal/credits/' handler={CreditsHandler}/>
    <NotFoundRoute name='not-found' handler={NotFoundHandler}/>
  </Route>
);


module.exports = routes;
