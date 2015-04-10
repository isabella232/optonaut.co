'use strict';

import React from 'react';
import Router from 'react-router';
import HeadParams from './lib/HeadParams';
import Routes from './components/Routes';

let headParams = new HeadParams();

Router.run(Routes, Router.RefreshLocation, function (Handler, state) {
  let bodyElement = React.createFactory(Handler)({
    params: state.params,
    headParams: headParams,
    clientReady: true
  });

  React.render(bodyElement, document.body);
});
