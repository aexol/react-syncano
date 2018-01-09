import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
@connect(
  state => ({
    valid: state.valid
  }),
  {
    // Put actions here
  }
)
class Home extends React.Component {
  render () {
    return (
      <div className='Demo'>
        
      </div>
    )
  }
}
export default withRouter(Home)
