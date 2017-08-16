import React from 'react';
import {
  Route,
  IndexRoute
}
from 'react-router';
import {
  LoginContainer,
  HomeContainer,
  PanelContainer,
  AppContainer
}
from './containers';
import {
  getToken
}
from './server/config.jsx';
const haveToken = () => {
  return getToken() ? getToken().length > 0 ? true : false : false;
}
const isUser = (nextState,
replace) => {
  if (!haveToken()) {
    replace({
      pathname: "/login"
    })
  }
}
const routes = (
    <Route component={AppContainer} path="/">
      <Route component={LoginContainer} path="login"/>
      <Route component={HomeContainer} path=""></Route>
    </Route>
);
export
default routes;