import React, { PropTypes } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import ModalSet from '../media/ModalSet'
import Loading from '../utils/Loading'
import './List.scss'
import { withSyncano } from '../decorators'
import MultiSelect from "../utils/fields/components/MultiSelect";
import FormGenerator from '../utils/FormGenerator'
import { filterRules } from "../utils/filterRules";
@withSyncano()
class List extends React.Component {
    state = {
        filtr: [],
        activeFilters: [],
        display: { value: 'id' }
    }
    componentWillMount() {
        const props = this.props
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
        console.log(this.state.activeFilters)
        if (!model) {
            return <div className='ChooseModel'>Choose a model</div>
        }
        let renderedObjects = this.props[model.name]
        let filterKeys = Object.keys(filtr).filter(f => this.state.activeFilters.find(a=> a.value === f))
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
                <div className='SyncanoFilters'>
                    <div className='SyncanoMultiSelects'>
                      <div className='MultiSelectSearchFields'>
                        {model.fields.filter(
                            f => this.state.activeFilters.find(a => a.value === f.name)
                        ).map(f =>
                            <input key={f.name} type="text" placeholder={f.name} onChange={(e) => {
                                this.setState({
                                    filtr: {
                                        ...this.state.filtr,
                                        [f.name]: e.target.value
                                    }
                                })
                            }} />
                        )}
                      </div>
                      <MultiSelect
                          options={model.fields
                              .filter(
                                  f => f.type === 'string'
                              )
                              .map(
                                  f => ({ label: f.name, value: f.name })
                              )}
                          multi={true}
                          value={this.state.activeFilters}
                          onChange={(activeFilters) => {
                              this.setState({
                                  activeFilters
                              })
                          }}
                          placeholder="Filter by.."
                      />
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
                    </div>
                    <div className="AddButton" onClick={()=>{
                        this.setState({
                            open:'add'
                        })
                    }}>
                            <div className="Horizontal"></div>
                            <div className="Vertical"></div>
                    </div>
                </div>
                <div className='SyncanoList'>
                    {renderedObjects.map(m => (
                        <div className='SyncanoObject' key={m.id}>
                          <div
                            onClick={() => {
                                this.setState({
                                    open: 'delete',
                                    values: { id: m.id }
                                })
                            }}
                            className='deleteButton'
                          >×</div>
                          <div
                              className='displayName'
                              onClick={() => {
                                  this.setState({
                                      open: 'update',
                                      values: { ...m }
                                  })
                              }}
                          >{display ? m[display.value] || m.id : m.id}</div>
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
