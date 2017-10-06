import React, {PropTypes} from 'react'
import FormGenerator from '../utils/FormGenerator'
import {Modal, ModalHeader, ModalBody} from './Modal'
class UpdateModal extends React.Component {
  render () {
    const {
      actions,
      isOpen,
      toggle,
      fields,
      values,
      text,
      name,
      initialData = {}
    } = this.props
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{`Edytuj ${name}`}</ModalHeader>
        <ModalBody>
          <FormGenerator
            fields={fields}
            submitText='Edit'
            validator='syncano'
            validate={e => {
              actions.syncanoUpdate({
                model: name,
                id: values.id,
                data: {
                  ...initialData,
                  ...e
                }
              })
              toggle()
            }}
            values={values}
          />
        </ModalBody>
      </Modal>
    )
  }
}
export default UpdateModal
