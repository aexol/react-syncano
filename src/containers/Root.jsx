import React,
{
  Component
}
from 'react';
import PropTypes from 'prop-types';
import {
  Provider
}
from 'react-redux';
import {
  LoginContainer,
  HomeContainer,
  PanelContainer,
  AppContainer
}
from '.';
import {
  BrowserRouter as Router,
  Route,
  Link
}
from 'react-router-dom';
class Root extends Component {
  render() {
    const {
      store,
      history
    } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route component={AppContainer} path="/"/>
          </div>
        </Router>
      </Provider>
    );
  }
}
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
export
default Root;