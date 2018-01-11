import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Demo from './Demo'
import './App.scss'
@connect(
  state => ({
    ...state
  }),
  {}
)
class AppContainer extends React.Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route component={Home} exact path='/' />
          <Route component={Demo} exact path='/demo' />
        </Switch>
      </div>
    )
  }
}
export default withRouter(AppContainer)
