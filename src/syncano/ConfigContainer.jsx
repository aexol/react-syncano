import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  bindActionCreators
}
from 'redux';
import * as actions from '../actions';
const fields = [
  {
    name:"migrate_key",
    type:"text"
  }
]
class ConfigContainer extends React.Component {
    componentWillMount(){
        const {
            actions
        } = this.props;
    }
    render () {
        return (
          <div className='ConfigContainer'></div>
        )
    }
}
const mapStateToProps = (state) => ({
    ...state
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(ConfigContainer);
