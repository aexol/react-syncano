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
      <div className='Home'>
        <div className='WelcomeMessage'>
          {' '}
          Hello! Everything is up and runnin. Now you can start creating your ultra-fast marvelous react-redux-syncano app. Happy coding.
        </div>
      </div>
    )
  }
}
export default withRouter(Home)
