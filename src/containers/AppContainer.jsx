import React,
{
  PropTypes
}
from 'react';
import {
  connect
}
from 'react-redux';
import {
  bindActionCreators
}
from 'redux';
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
class AppContainer extends React.Component {
  render () {
    const {
      actions,
      children,
      alerts
    } = this.props;
    return (
      <App actions={actions} alerts={alerts}>
        <Switch>
          <Route component={HomeContainer} exact path="/"/>
        </Switch>
      </App>
    )
  }
}
const mapStateToProps = (state) => ({
  alerts: state.uni.alerts ? state.uni.alerts : []
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
export
default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppContainer));
