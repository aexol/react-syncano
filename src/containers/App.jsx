import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Demo from './Demo'
import Apps from './App.scss'
@connect(
  state => ({
    ...state
  }),
  {}
)
class AppContainer extends React.Component {
  render () {
    console.log(Apps)
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
