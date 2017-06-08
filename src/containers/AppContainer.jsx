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
class AppContainer extends React.Component {
  render () {
    const {
      actions
    } = this.props;
    return (
      <App actions={actions}/>
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
default connect(mapStateToProps, mapDispatchToProps)(AppContainer);