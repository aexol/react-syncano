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
  push
}
from 'react-router-redux'; // import
class HomeContainer extends React.Component {
  componentWillMount() {
    const {
      actions
    } = this.props;
    actions.validate();
  }
  render () {
    const {
      actions,
      valid,
      children
    } = this.props;
    if (valid === false) {
      push('/login')
    } else if (valid === null) {
      return (
        <div className='wait'></div>
      )
    }
    return (
      <Home actions={actions} children={children}/>
    )
  }
}
const mapStateToProps = (state) => ({
  valid: state.auth.valid
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  push: bindActionCreators(push, dispatch)
})
export
default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);