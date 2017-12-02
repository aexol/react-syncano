import React, {PropTypes} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from './Modal'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
@connect(
  state => ({
  }),
  {
    syncanoDelete:actions.syncanoDelete
  }
)
class DeleteModal extends React.Component {
  render () {
    const {
      isOpen,
      toggle,
      values,
      text,
      warning,
      syncanoDelete,
      name
    } = this.props
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{text}</ModalHeader>
        <ModalBody>{warning}</ModalBody>
        <ModalFooter toggle={toggle}>
          <button
            onClick={() => {
              syncanoDelete({
                model:name,
                id:values.id
              })
              toggle()
            }}
          >
            Delete {name}
          </button>{' '}
          <button onClick={toggle}>Cancel</button>
        </ModalFooter>
      </Modal>
    )
  }
}
export default DeleteModal
