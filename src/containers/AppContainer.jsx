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
  AppStrap
}
from '../components';
class AppContainer extends React.Component {
  render () {
    const {
      actions,
      children,
      alerts
    } = this.props;
    return (
      <AppStrap actions={actions} alerts={alerts} children={children}/>
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
default connect(mapStateToProps, mapDispatchToProps)(AppContainer);