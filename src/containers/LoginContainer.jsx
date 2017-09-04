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
  Login
}
from '../components';
import {
  withRouter
}
from 'react-router-dom'
class LoginContainer extends React.Component {
  render () {
    const {
      actions,
      alerts
    } = this.props;
    return (
      <Login actions={actions} alerts={alerts}/>
    )
  }
}
const mapStateToProps = (state) => ({
  alerts: state.alerts.alerts
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
export
default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));