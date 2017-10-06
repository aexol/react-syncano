import React, {PropTypes} from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter} from './Modal'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'
class DeleteModal extends React.Component {
  render () {
    const {
      actions,
      isOpen,
      toggle,
      values,
      text,
      warning,
      name
    } = this.props
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{text}</ModalHeader>
        <ModalBody>{warning}</ModalBody>
        <ModalFooter toggle={toggle}>
          <button
            onClick={() => {
              actions.syncanoDelete({
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
