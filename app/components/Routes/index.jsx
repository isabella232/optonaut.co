'use strict';

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import Layout from '../Layout';
import HomeHandler from '../HomeHandler';
import LoginHandler from '../LoginHandler';
import ImprintHandler from '../legal/ImprintHandler';
import NotFoundHandler from '../NotFoundHandler';

var routes = (
  <Route name='appBody' path='/' handler={Layout}>
    <DefaultRoute name='home' handler={HomeHandler}/>
    <Route name='login' path='login/' handler={LoginHandler}/>
    <Route name='legal-imprint' path='legal/imprint/' handler={ImprintHandler}/>
    <NotFoundRoute name='not-found' handler={NotFoundHandler}/>
  </Route>
);


module.exports = routes;
