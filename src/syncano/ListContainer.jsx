import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import {withRouter, Switch, Route} from 'react-router-dom'
import models from '../models'
import ModalSet from './media/ModalSet'
class ListContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentWillMount () {
    const {actions} = this.props
    models.forEach(m => {
      actions.syncanoList({
        model: m.name
      })
    })
  }
  render () {
    const {model,actions} = this.props
    const {values, open} = this.state
    return (
      <div className=''>
        {model &&
          <div className='SyncanoNavigation'>
            <div
              className='SyncanoLink'
              onClick={() => {
                this.setState({open: 'add'})
              }}
            >
              Add
            </div>
          </div>}
        <div className='SyncanoList'>
          {model &&
            this.props[model.name].map(m => (
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
                  {m[model.display]}
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
        {model &&
          <ModalSet
            name={model.name}
            actions={actions}
            fields={model.fields}
            values={values}
            open={open}
            toggle={o => {
              this.setState({
                open: o
              })
            }}
          />}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...models.map(m => m.name).reduce((p, n) => {
    p[n] = state.uni[n] ? state.uni[n] : []
    return p
  }, {})
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListContainer)
)
