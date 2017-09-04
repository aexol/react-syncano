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
  Home
}
from '../components';
import {
  withRouter
}
from 'react-router-dom'
class HomeContainer extends React.Component {
  render () {
    const {
      actions,
      children
    } = this.props;
    return (
      <Home actions={actions} children={children}/>
    )
  }
}
const mapStateToProps = (state) => ({
  valid: state.auth.valid
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
export
default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));