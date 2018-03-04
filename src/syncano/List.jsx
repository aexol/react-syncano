import React, { PropTypes } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import ModalSet from './media/ModalSet'
import Loading from './utils/Loading'
import './List.scss'
import { withSyncano } from './decorators'
import MultiSelect from "./utils/fields/components/MultiSelect";
import FormGenerator from './utils/FormGenerator'
import { filterRules } from "./utils/filterRules";
@withSyncano()
class List extends React.Component {
  state = {
    filtr: [],
    display: { value: 'id' }
  }
  componentWillReceiveProps(props) {
    if (this.props.model !== props.model) {
      let [predictStringField] = props.model.fields.filter(f => f.type === 'string')
      if (predictStringField) {
        predictStringField = predictStringField.name
        predictStringField = { label: predictStringField, value: predictStringField }
      }
      this.setState({
        display: predictStringField,
        search: ''
      })
    }
  }
  render() {
    const { model } = this.props
    const { values, open, search, filtr, display } = this.state
    if (!model) {
      return <div className='ChooseModel'>Choose a model</div>
    }
    let renderedObjects = this.props[model.name]
    let filterKeys = Object.keys(filtr)
    if (filterKeys.length) {
      for (var f of filterKeys) {
        renderedObjects = filterRules({
          value: filtr[f],
          values: renderedObjects,
          name: f,
          type: model.fields.find(field => field.name === f).type
        })
      }
    }
    return (
      <div className='SyncanoManage'>
        <div className='SyncanoNav'>

          <label>Display values by:</label>
          <MultiSelect
            onChange={e => {
              this.setState({
                display: e,
                search: ''
              })
            }}
            style={{
              width: 200
            }}
            placeholder="Display"
            value={display}
            options={model.fields
              .filter(f => f.type === 'string')
              .map(f => ({
                label: f.name,
                value: f.name
              }))}
          />
          <div
            className='SyncanoLink'
            onClick={() => {
              this.setState({ open: 'add' })
            }}
          >
            Add
          </div>
          <input
            type='text'
            className='SearchInput'
            placeholder='Search...'
            value={search}
            onChange={e => {
              this.setState({
                search: e.target.value
              })
            }}
          />
        </div>
        <div className='SyncanoFilters'>
          {model.fields.filter(
            f => f.type === 'string'
          ).map(f =>
            <FormGenerator
              key={f.name}
              fields={[f]}
              validate={(e) => {
                this.setState({
                  filtr: {
                    ...this.state.filtr,
                    ...e
                  }
                })
              }}
              Submit={() => <div className='div'></div>}
            />
          )}
        </div>
        <div className='SyncanoList'>
          {renderedObjects.map(m => (
            <div className='SyncanoObject' key={m.id}>
              <div
                className='displayName'
                onClick={() => {
                  this.setState({
                    open: 'update',
                    values: { ...m }
                  })
                }}
              >
                {display ? m[display.value] || m.id : m.id}
              </div>
              <div
                onClick={() => {
                  this.setState({
                    open: 'delete',
                    values: { id: m.id }
                  })
                }}
                className='deleteButton'
              >
                ×
              </div>
            </div>
          ))}
        </div>
        <ModalSet
          name={model.name}
          actions={this.props}
          fields={model.fields}
          values={values}
          open={open}
          toggle={o => {
            this.setState({
              open: o
            })
          }}
        />
      </div>
    )
  }
}
export default withRouter(List)
