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
  Home
}
from '../components';
import {
  withRouter
}
from 'react-router-dom'

@connect(
  state => ({
    valid:state.valid
  }),{
    ...actions
  }
)
class HomeContainer extends React.Component {
  render () {
    return (
      <Home actions={actions} {...this.props} />
    )
  }
}
export
default withRouter(HomeContainer);
