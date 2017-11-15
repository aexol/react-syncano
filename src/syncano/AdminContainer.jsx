import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import ModalSet from './media/ModalSet'
import {HOST, INSTANCE_NAME} from '../server/config'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import './AdminContainer.scss'
import Cookies from 'js-cookie'
import FormGen from './utils/FormGenerator'
import ListContainer from './ListContainer'
import MigrateContainer from './MigrateContainer'
import ConfigContainer from './ConfigContainer'
import Loading from './utils/Loading'

@connect(
  state => ({
    ...state
  }),
  {
    ...actions
  }
)
class SyncanoAdminContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentWillMount () {
    const {valid, token, username} = this.props
    console.log(this.props)
    if (token && valid !== true) {
      this.props.syncanoValidate({token, username})
    }
  }
  componentDidUpdate (prevProps) {
    const {valid, token, username, models} = this.props
    if (!models) {
      this.props.syncanoSetModels()
    }
    if (
      valid === true &&
      typeof prevProps.models === 'undefined' &&
      typeof models !== 'undefined'
    ) {
      models.forEach(m => {
        this.props.syncanoList({
          model: m.name
        })
      })
    }
  }
  render () {
    const {token, valid, match, models} = this.props
    const {open, active, model, values, invalid = {}} = this.state
    console.log(this.props)
    const loginScreen = (
      <div className='SyncanoAdmin'>
        <div className='SyncanoLogin'>
          <div className='SyncanoInstanceName'>
            {INSTANCE_NAME === 'YOUR_INSTANCE_NAME_HERE'
              ? 'Please set your syncano instance name in src/server/config.jsx'
              : INSTANCE_NAME}
          </div>
          <FormGen
            invalid={invalid}
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
              this.props.syncanoLogin(e)
            }}
          />
        </div>
      </div>
    )
    if (!valid) {
      return loginScreen
    }
    if (typeof models === 'undefined') {
      return <Loading>Loading models...</Loading>
    }
    return (
      <div className='SyncanoAdmin'>
        <div className='SyncanoCategories'>
          <Link to={`${match.url}/manage`} className='SyncanoCategory'>
            Manage
          </Link>
          <Link to={`${match.url}/migrate`} className='SyncanoCategory'>
            Migrate
          </Link>
          <Link to={`${match.url}/model`} className='SyncanoCategory'>
            Model
          </Link>
          <Link to={`${match.url}/config`} className='SyncanoCategory'>
            Config
          </Link>
        </div>
        <div className='SyncanoNavigation'>
          {models.filter( m => typeof this.props[m.name] !== "undefined" ).map(m => (
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
                this.props.syncanoLogout()
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
export default withRouter(SyncanoAdminContainer)
