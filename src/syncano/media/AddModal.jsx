import React, {PropTypes} from 'react'
import {Modal, ModalHeader, ModalBody} from './Modal'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'
import FormGenerator from '../utils/FormGenerator'
class AddModal extends React.Component {
  render () {
    const {
      actions,
      isOpen,
      toggle,
      fields,
      text,
      name,
      initialData = {}
    } = this.props
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{text}</ModalHeader>
        <ModalBody>
          <FormGenerator
            fields={fields}
            submitText='Add'
            validate={e => {
              actions.syncanoAdd({
                model: name,
                data: {
                  ...initialData,
                  ...e
                }
              })
              toggle()
            }}
          />
        </ModalBody>
      </Modal>
    )
  }
}
export default AddModal
