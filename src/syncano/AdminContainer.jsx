import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import ModalSet from './media/ModalSet'
import {HOST, INSTANCE_NAME} from '../server/config'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import './AdminContainer.scss'
import models from '../models'
import Cookies from 'js-cookie'
import FormGen from '../utils/formgen'
import ListContainer from './ListContainer'
import MigrateContainer from './MigrateContainer'
import ConfigContainer  from './ConfigContainer'
class SyncanoAdminContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentWillMount () {
    const {actions, valid, token, username} = this.props
    if (token && valid !== true) {
      actions.syncanoValidate({token, username})
    }
  }
  render () {
    const {actions, token, valid, match} = this.props
    const {open, active, model, values} = this.state
    const loginScreen = (
      <div className='SyncanoAdmin'>
        <div className='SyncanoLogin'>
          <div className='SyncanoInstanceName'>
            {INSTANCE_NAME === 'YOUR_INSTANCE_NAME_HERE'
              ? 'Please set your syncano instance name in src/server/config.jsx'
              : INSTANCE_NAME}
          </div>
          <FormGen
            fields={[
              {
                name: 'username',
                type: 'text'
              },
              {
                name: 'password',
                type: 'text',
                inputType: 'password'
              }
            ]}
            validate={e => {
              actions.syncanoLogin(e)
            }}
          />
        </div>
      </div>
    )
    if (!valid) {
      return loginScreen
    }
    return (
      <div className='SyncanoAdmin'>
        <div className='SyncanoCategories'>
          <Link to={`${match.url}/manage`} className='SyncanoCategory'>Manage</Link>
          <Link to={`${match.url}/migrate`} className='SyncanoCategory'>Migrate</Link>
          <Link to={`${match.url}/model`} className='SyncanoCategory'>Model</Link>
          <Link to={`${match.url}/config`} className='SyncanoCategory'>Config</Link>
        </div>
        <div className='SyncanoNavigation'>
          {models.map(m => (
            <div
              key={m.name}
              className='SyncanoLink'
              onClick={() => {
                this.setState({
                  model: m
                })
              }}
            >
              {m.name}
            </div>
          ))}
          <div className='UserSettings'>
            <div
              className='logOut'
              onClick={() => {
                actions.syncanoLogout()
              }}
            >
              logout
            </div>
            <div className='changePassword'>change password</div>
          </div>
        </div>
        <Switch>
          <Route
            render={() => <MigrateContainer model={model} />}
            path='/admin/migrate'
          />
          <Route
            render={() => <ListContainer model={model} />}
            path='/admin/manage'
          />
          <Route
            render={() => <ConfigContainer model={model} />}
            path='/admin/config'
          />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state,
  token: state.auth.token,
  valid: state.auth.valid,
  username: state.auth.username
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SyncanoAdminContainer)
)
