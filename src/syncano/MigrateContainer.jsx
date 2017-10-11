import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import FormGen from './utils/FormGenerator'
import {withRouter, Switch, Route} from 'react-router-dom'
import {Line, Circle} from 'rc-progress'
import './MigrateContainer.scss'
const fields = [
  {
    name: 'key',
    type: 'text'
  },
  {
    name: 'link',
    type: 'text'
  },
  {
    name: 'fields',
    type: 'tag'
  },
  {
    name: 'payload',
    type: 'textarea'
  }
]
class MigrateContainer extends React.Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    const {actions} = this.props
  }
  render () {
    const {actions, model, progress} = this.props
    var containerStyle = {
      width: '200px',
      height: '200px'
    }
    var options = {
      strokeWidth: 2
    }
    return (
      <div className='MigrateContainer'>
        <FormGen
          fields={fields}
          values={
            model
              ? {
                model: model.name,
                fields: model.fields.map(f => ({
                  label: f.name,
                  value: f.name
                }))
              }
              : {}
          }
          validate={e => {
            actions.startMigration({
              ...e,
              model: model.name,
              fields: e.fields ? e.fields : model.fields.map(f => f.name),
              payload: e.payload ? JSON.parse(e.payload) : null
            })
          }}
        />
        <div className='MigrationStatus'>
          <Line
            percent={`${progress * 100}`}
            strokeWidth='4'
            strokeColor='#D3D3D3'
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  progress: state.migrations.progress
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MigrateContainer)
)
