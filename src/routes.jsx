import React from 'react';
import {
  Route,
  IndexRoute
}
from 'react-router';
import {
  HomeContainer,
  AppContainer
}
from './containers';
const routes = (
    <Route component={AppContainer} path="/">
      <IndexRoute component={HomeContainer}/>
    </Route>
);
export
default routes;