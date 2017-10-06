import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {
  LoginContainer,
  HomeContainer,
  PanelContainer,
  AppContainer,
} from '.'
import AdminContainer from '../syncano/AdminContainer.jsx';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
class Root extends Component {
  render () {
    const {store, history} = this.props
    return (
      <Provider store={store}>
        <Router>
          <div id='routing'>
            <Switch>
              <Route component={AdminContainer} path='/admin' />
              <Route component={AppContainer} path='/' />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
export default Root
