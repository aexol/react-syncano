import React, {PropTypes} from 'react'
import FormGenerator from './utils/FormGenerator'
import Tip from './utils/Tip'
import { withSyncano } from './decorators'
const configFields = [
  {
    type: 'tag',
    name: 'models',
    placeholder: 'Everybodys permissions'
  },
  {
    type: 'tag',
    name: 'logged_in',
    placeholder: 'Logged in user permissions'
  },
  {
    type: 'tag',
    name: 'object_level',
    placeholder: 'Object level user permissions'
  }
]


@withSyncano()
class Config extends React.Component {
  componentWillMount () {
    const {syncanoGetConfig} = this.props
    syncanoGetConfig()
  }
  render () {
    let {models: schemaModels, config = {},syncanoRestFrameworkConfigure} = this.props
    let {
      models = [],
      logged_in = [],
      object_level = []
    } = config
    let preComputedValues = {
      models: models.map(m => `${m.model}:${m.type}`),
      logged_in: logged_in.map(m => `${m.model}:${m.type}`),
      object_level: object_level.map(
        m => `${m.model}:${m.type}:${m.owner}`
      )
    }
    return (
      <div className='Config'>
        <Tip>
          <p>{schemaModels.map(sch => sch.name)}</p>
          <p>Usage: This is for configuration for rest-framework socket</p>
          <p>
            Everybody: specify permissions for everybody in format
            {' '}
            <strong>model:permissions</strong>
          </p>
          <p>
            Logged in: specify models available for logged in users with permissions in format
            {' '}
            <strong>model:permissions</strong>
          </p>
          <p>
            Object level: specify models available for logged in users who are owners of object with permissions in format
            {' '}
            <strong>model:permissions:owner</strong>
          </p>
        </Tip>
        <FormGenerator
          validate={e => {
            let data = {...preComputedValues, ...e}
            data = {
              ...data,
              models: data.models.map(o => ({
                model: o.split(':')[0],
                type: o.split(':')[1]
              })),
              logged_in: data.logged_in.map(o => ({
                model: o.split(':')[0],
                type: o.split(':')[1]
              })),
              object_level: data.object_level.map(o => ({
                model: o.split(':')[0],
                type: o.split(':')[1],
                owner: o.split(':')[2]
              }))
            }
            console.log(data)
            syncanoRestFrameworkConfigure(data)
          }}
          fields={configFields}
          values={preComputedValues}
        />
      </div>
    )
  }
}

export default Config
