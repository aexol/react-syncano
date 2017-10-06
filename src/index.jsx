/* eslint-disable import/default */
import React from 'react';
import {
  render
}
from 'react-dom';
import {
  browserHistory
}
from 'react-router';
import {
  AppContainer
}
from 'react-hot-loader';
import Root from './containers/Root';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './index.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = browserHistory;
render(<AppContainer>
  <Root history={history} store={store}/>
</AppContainer>, document.getElementById('app'));
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').
    default;
    render(<AppContainer>
      <NewRoot history={history} store={store}/>
    </AppContainer>, document.getElementById('app'));
  });
}
