import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import './App.scss'
@connect(
  state => ({
    alerts: state.alerts
  }),
  {}
)
class AppContainer extends React.Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route component={Home} exact path='/' />
        </Switch>
      </div>
    )
  }
}
export default withRouter(AppContainer)
