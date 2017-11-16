import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'
import {withRouter, Switch, Route} from 'react-router-dom'
import ModalSet from './media/ModalSet'
import Loading from './utils/Loading'
import { display } from "../display";
import './ListContainer.scss';

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
      return <div className='ChooseModel'>Choose a model</div>
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
          <input type="text" className='SearchInput' placeholder="Search..."/>
        </div>
        <div className='SyncanoList'>
          {this.props[model.name].map(m => (
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
export default withRouter(ListContainer)
