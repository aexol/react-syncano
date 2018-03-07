import React, { PropTypes } from 'react'
import ModalSet from './media/ModalSet'
import { INSTANCE_NAME } from './server/config'
import { withRouter, Switch, Route, Link } from 'react-router-dom'
import './Admin.scss'
import FormGen from './utils/FormGenerator'
import List from './List'
import Config from './Config'
import Model from "./Model";
import classnames from 'classnames'
import { PreloaderScreen } from './media/PreloaderScreen'
import { withSyncano } from './decorators'

@withSyncano()
class SyncanoAdmin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  init = (props) => {
    const { valid, token, username, models } = this.props

    if (props.valid && !valid) {
      this.props.syncanoSetModels()
    }
    if (props.models && !models) {
      props.models.forEach(m => {
        this.props.syncanoList({
          model: m.name
        })
      })
    }
    if (!props.valid && valid) {

    }
  }

  componentWillMount() {
    const { syncanoValid } = this.props
    syncanoValid()
  }

  componentWillReceiveProps(nextProps) {
    this.init(nextProps)
  }

  render() {
    const { token, valid, match, models } = this.props
    const { open, active, values, invalid = {}, showCategories } = this.state
    const loginScreen = (
      <div className='SyncanoAdmin'>
        <div className='SyncanoLogin'>
          <div className='Logo'>
            <img src={require('../images/logo-aexol.png')} />
          </div>
          <div className='SyncanoInstanceName'>
            Instance:&nbsp;
            {INSTANCE_NAME === 'YOUR_INSTANCE_NAME_HERE'
              ? 'Please set your syncano instance name in src/server/config.jsx'
              : INSTANCE_NAME }
          </div>
          <FormGen
            invalid={invalid}
            fields={[
              {
                name: 'username',
                type: 'string'
              },
              {
                name: 'password',
                type: 'string',
                inputType: 'password'
              }
            ]}
            validate={e => {
              this.props.syncanoLogin(e)
            }}
            submitText={'Sign in'}
          />
        </div>
      </div>
    )
    if (!valid && valid !== null) {
      return loginScreen
    }
    if (valid === null) {
      return <PreloaderScreen size={64} text='Validating token...' />
    }
    if (!models) {
      return <PreloaderScreen size={64} text='Loading models...' />
    }

    return (
      <div className='SyncanoAdmin ContentAdmin'>
        <div
          className={classnames({
            'open-categories': true,
            'arrow-toggle': showCategories
          })}
          onClick={() => {
            this.setState({
              showCategories: !showCategories
            })
          }}
        >
        <svg version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 284.935 284.936" >
        	<path d="M222.701,135.9L89.652,2.857C87.748,0.955,85.557,0,83.084,0c-2.474,0-4.664,0.955-6.567,2.857L62.244,17.133
          c-1.906,1.903-2.855,4.089-2.855,6.567c0,2.478,0.949,4.664,2.855,6.567l112.204,112.204L62.244,254.677
          c-1.906,1.903-2.855,4.093-2.855,6.564c0,2.477,0.949,4.667,2.855,6.57l14.274,14.271c1.903,1.905,4.093,2.854,6.567,2.854
          c2.473,0,4.663-0.951,6.567-2.854l133.042-133.044c1.902-1.902,2.854-4.093,2.854-6.567S224.603,137.807,222.701,135.9z" fill="#FFFFFF"/>
        </svg>
        </div>
        <div
          className={classnames({
            SyncanoCategories: true,
            'show-categories': showCategories
          })}
        >
          <div className='SyncanoLogoCompany'>
            <img src={require('../images/logo-aexol.png')} />
            <p>Admin Panel</p>
          </div>
          <div className='Models'>
            <div className='SyncanoCategoryTitle'>Models</div>
            {models
              .filter(m => typeof this.props[m.name] !== 'undefined')
              .map(m => (
                <Link key={m.name} to={`${match.url}/manage/${m.name}`} className='SyncanoCategory'>
                  {m.name}
                </Link>
              ))}
          </div>
          <div className='Settings'>
            <div className='SyncanoCategoryTitle'>Settings</div>
            <Link to={`${match.url}/model`} className='SyncanoCategory'>
              Model
          </Link>
            <Link to={`${match.url}/config`} className='SyncanoCategory'>
              Config
          </Link>
          </div>
          <div
            className='SyncanoCategory LogOut'
            onClick={() => {
              this.props.syncanoLogout()
            }}
          >
            log out
          </div>
        </div>
        <div className='SyncanoContainer'>
          <Switch>
            <Route
              render={() => <List />}
              path='/admin/manage/:model/'
            />
            <Route
              render={() => <Config />}
              path='/admin/config'
            />
            <Route
              render={() => <Model />}
              path='/admin/model'
            />
          </Switch>
        </div>
      </div>
    )
  }
}
export default withRouter(SyncanoAdmin)
