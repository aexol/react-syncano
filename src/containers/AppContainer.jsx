import React,
{
  PropTypes
}
from 'react';
import {
  connect
}
from 'react-redux';
import * as actions from '../actions';
import {
  App
}
from '../components';
import {
  HomeContainer,
  LoginContainer
}
from '.';
import {
  withRouter,
  Switch,
  Route
}
from 'react-router-dom'
@connect(
  state => ({
    alerts:state.alerts
  }),{
    ...actions
  }
)
class AppContainer extends React.Component {
  render () {
    const {
      actions,
      children,
      alerts
    } = this.props;
    return (
      <App {...this.props}>
        <Switch>
          <Route component={HomeContainer} exact path="/"/>
        </Switch>
      </App>
    )
  }
}
export
default withRouter(AppContainer);
