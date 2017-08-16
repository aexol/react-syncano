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
default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);