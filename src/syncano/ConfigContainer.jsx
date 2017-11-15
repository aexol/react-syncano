import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
const fields = [
  {
    name:"migrate_key",
    type:"text"
  }
]
@connect(
  state => ({

  }),{
    ...actions
  }
)
class ConfigContainer extends React.Component {
    render () {
        return (
          <div className='ConfigContainer'></div>
        )
    }
}
export default ConfigContainer;
