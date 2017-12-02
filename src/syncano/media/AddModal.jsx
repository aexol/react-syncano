import React, {PropTypes} from 'react'
import {Modal, ModalHeader, ModalBody} from './Modal'
import classnames from 'classnames'
import FontAwesome from 'react-fontawesome'
import FormGenerator from '../utils/FormGenerator'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
@connect(
  state => ({
    ...state
  }),
  {
    syncanoAdd:actions.syncanoAdd
  }
)
class AddModal extends React.Component {
  render () {
    const {
      isOpen,
      toggle,
      fields,
      text,
      name,
      syncanoAdd,
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
              syncanoAdd({
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
