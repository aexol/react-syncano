import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from './actions'
import FormGenerator from './utils/FormGenerator'
import Tip from './utils/Tip'
const configFields = [
  {
    type: 'tag',
    name: 'models'
  },
  {
    type: 'tag',
    name: 'logged_in'
  },
  {
    type: 'tag',
    name: 'object_level'
  }
]

@connect(
  state => ({
    models: state.models,
    config: state.config
  }),
  {
    ...actions
  }
)
class Config extends React.Component {
  componentWillMount () {
    const {syncanoGetConfig} = this.props
    syncanoGetConfig()
  }
  render () {
    let {models: schemaModels, config = {}} = this.props
    let {
      models = schemaModels.map(m => m.name),
      logged_in = [],
      object_level = []
    } = config
    let preComputedValues = {
      models,
      logged_in: logged_in.map(m => `${m.model}:${m.type}`),
      object_level: object_level.map(
        m => `${m.model}:${m.type}:${m.owner_field}`
      )
    }
    let computedValues = {
      models: preComputedValues.models.map(m => ({label: m, value: m})),
      logged_in: preComputedValues.logged_in.map(m => ({label: m, value: m})),
      object_level: preComputedValues.object_level.map(m => ({
        label: m,
        value: m
      }))
    }
    return (
      <div className='Config'>
        <Tip>
          <p>Usage: This is for configuration for rest-framework socket</p>
          <p>
            Models: Specify models which has to be available in rest framework( all models are available for superuser always )
          </p>
          <p>
            Logged in: specify models available for logged in users with permissions in format
            {' '}
            <strong>model:permissions</strong>
          </p>
          <p>
            Object level: specify models available for logged in users who are owners of object with permissions in format
            {' '}
            <strong>model:permissions:owner_field</strong>
          </p>
        </Tip>
        <FormGenerator
          validate={e => {
            let data = {...preComputedValues, ...e}
            data = {
              ...data,
              logged_in: data.logged_in.map(o => ({
                model: o.split(':')[0],
                type: o.split(':')[1]
              })),
              object_level: data.object_level.map(o => ({
                model: o.split(':')[0],
                type: o.split(':')[1],
                owner_field: o.split(':')[2]
              }))
            }
          }}
          fields={configFields}
          values={computedValues}
        />
      </div>
    )
  }
}

export default Config
