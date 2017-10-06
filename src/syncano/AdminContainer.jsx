import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import ModalSet from './media/ModalSet'
import {HOST} from '../server/config'
import {withRouter, Switch, Route} from 'react-router-dom'
import './AdminContainer.scss'
import models from '../models'
import Cookies from 'js-cookie'
import FormGen from '../utils/formgen'
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
    models.forEach(m => {
      actions.syncanoList({
        model: m.name
      })
    })
  }
  render () {
    const {actions, token, valid} = this.props
    const {open, active, model, values} = this.state
    const loginScreen = (
      <div className='SyncanoAdmin'>
        <div className='SyncanoLogin'>
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
            <div className='logOut' onClick={()=>{
              actions.syncanoLogout();
              }}>logout</div>
            <div className='changePassword'>change password</div>
          </div>
        </div>
        {model &&
          <div className='SyncanoNavigation'>
            <div
              className='SyncanoLink'
              onClick={() => {
                this.setState({open: 'add'})
              }}
            >
              Add
            </div>
          </div>}
        <div className='SyncanoList'>
          {model &&
            this.props[model.name].map(m => (
              <div className='SyncanoObject' key={m.id}>
                <span
                  className='displayName'
                  onClick={() => {
                    this.setState({
                      open: 'update',
                      values: {...m}
                    })
                  }}
                >
                  {m[model.display]}
                </span>
                <span
                  onClick={() => {
                    this.setState({
                      open: 'delete',
                      values: {id:m.id}
                    })
                  }}
                  className='deleteButton'
                >
                  ×
                </span>
              </div>
            ))}
        </div>
        {model &&
          <ModalSet
            name={model.name}
            actions={actions}
            fields={model.fields}
            values={values}
            open={open}
            toggle={o => {
              this.setState({
                open: o
              })
            }}
          />}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state,
  ...models.map(m => m.name).reduce((p, n) => {
    p[n] = state.uni[n] ? state.uni[n] : []
    return p
  }, {}),
  token: state.auth.token,
  valid: state.auth.valid,
  username: state.auth.username
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(
  SyncanoAdminContainer
)
