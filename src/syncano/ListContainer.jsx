import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {withRouter, Switch, Route} from 'react-router-dom'
import ModalSet from './media/ModalSet'
import Loading from './utils/Loading'
import { display } from "../display";
@connect(
  state => ({
    ...state
  }),{
    ...actions
  }
)
class ListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const {model} = this.props
    const {values, open} = this.state
    if(!model){
      return <div className=''>Choose a model</div>
    }
    return (
      <div className=''>
        <div className='SyncanoNavigation'>
          <div
            className='SyncanoLink'
            onClick={() => {
              this.setState({open: 'add'})
            }}
          >
            Add
          </div>
          <input type="text" placeholder="search..."/>
        </div>
        <div className='SyncanoList'>
          {this.props[model.name].map(m => (
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
                {m[display(model.name)]}
              </span>
              <span
                onClick={() => {
                  this.setState({
                    open: 'delete',
                    values: {id: m.id}
                  })
                }}
                className='deleteButton'
              >
                ×
              </span>
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
export default withRouter(ListContainer)
