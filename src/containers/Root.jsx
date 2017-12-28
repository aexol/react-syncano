import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import App from './App'
import Admin from '../syncano/Admin.jsx'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
class Root extends Component {
  render () {
    const {store} = this.props
    return (
      <Provider store={store}>
        <Router>
          <div id='routing'>
            <Switch>
              <Route component={Admin} path='/admin' />
              <Route component={App} path='/' />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
