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
class HomeContainer extends React.Component {
  render () {
    const {
      actions
    } = this.props;
    return (
      <Home actions={actions}/>
    )
  }
}
const mapStateToProps = (state) => ({
  ...state
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
export
default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);