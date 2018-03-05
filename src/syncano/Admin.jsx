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
    const {
      open,
      active,
      values,
      invalid = {},
      showCategories
    } = this.state
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
          />
        </div>
      </div>
    )
    console.log(valid)
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
      <div className='SyncanoAdmin'>
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
          <svg
            version='1.1'
            id='Capa_1'
            x='0px'
            y='0px'
            width='26px'
            height='26px'
            viewBox='0 0 451.846 451.847'
          >
            <path
              d='M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z'
              fill='#FFFFFF'
            />
          </svg>
        </div>
        <div
          className={classnames({
            SyncanoCategories: true,
            'show-categories': showCategories
          })}
        >
          <div className='Models'>
            <div className='SyncanoCategoryTitle'>models</div>
            {models
              .filter(m => typeof this.props[m.name] !== 'undefined')
              .map(m => (
                <Link key={m.name} to={`${match.url}/manage/${m.name}`} className='SyncanoCategory'>
                  {m.name}
                </Link>
              ))}
          </div>
          <div className='Settings'>
            <div className='SyncanoCategoryTitle'>settings</div>
            <Link to={`${match.url}/model`} className='SyncanoCategory'>
              Model
          </Link>
            <Link to={`${match.url}/config`} className='SyncanoCategory'>
              Config
          </Link>
          </div>
          <div
            className='SyncanoCategory'
            onClick={() => {
              this.props.syncanoLogout()
            }}
          >
            logout
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
