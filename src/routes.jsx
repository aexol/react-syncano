import React from 'react';
import {
  Route,
  IndexRoute
}
from 'react-router';
import {
  LoginContainer,
  AppContainer
}
from './containers';
const routes = (
    <Route component={AppContainer} path="/">
      <IndexRoute component={LoginContainer}/>
      <Route component={AppContainer} path=""></Route>
    </Route>
);
export
default routes;