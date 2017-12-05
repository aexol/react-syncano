import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from './actions'
import {withRouter, Switch, Route} from 'react-router-dom'
import ModalSet from './media/ModalSet'
import Loading from './utils/Loading'
import {display} from '../display'
import Select from 'react-select'
import './List.scss'

@connect(
  state => ({
    ...state
  }),
  {
    ...actions
  }
)
class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentWillReceiveProps(props){
    if(this.props.model !== props.model){
      this.setState({
        filtr:undefined,
        search:''
      })
    }
  }
  render () {
    const {model} = this.props
    const {values, open, search, filtr} = this.state
    if (!model) {
      return <div className='ChooseModel'>Choose a model</div>
    }
    let renderedObjects = this.props[model.name]
    if (search) {
      let getter = display(model.name)
      if(filtr){
        getter = filtr.value
      }
      renderedObjects = renderedObjects.filter(
        o =>
          `${o[getter]}`
            .toLowerCase()
            .indexOf(search.toLowerCase()) !== -1
      )
    }
    return (
      <div className=''>
        <div className='SyncanoNav'>
          <div
            className='SyncanoLink'
            onClick={() => {
              this.setState({open: 'add'})
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
          <Select
            onChange={e => {
              this.setState({
                filtr: e,
                search:''
              })
            }}
            value={filtr}
            options={model.fields
              .filter(f => f.type === 'text' || f.type === 'textarea')
              .map(f => ({
                label: f.name,
                value: f.name
              }))}
          />
        </div>
        <div className='SyncanoList'>
          {renderedObjects.map(m => (
            <div className='SyncanoObject' key={m.id}>
              <div
                className='displayName'
                onClick={() => {
                  this.setState({
                    open: 'update',
                    values: {...m}
                  })
                }}
              >
                {m[display(model.name)]}
              </div>
              <div
                onClick={() => {
                  this.setState({
                    open: 'delete',
                    values: {id: m.id}
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
