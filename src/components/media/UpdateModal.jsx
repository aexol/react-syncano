import React,
{
  PropTypes
}
from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
}
from 'reactstrap';
import {
  Link
}
from 'react-router';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import FormGen from '../../utils/formgen.jsx';
class UpdateModal extends React.Component {
  render () {
    const {
      actions,
      isOpen,
      toggle,
      fields,
      values,
      endpoint,
      text,
      name,
      initialData = {}
    } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{`Edytuj ${name}`}</ModalHeader>
        <ModalBody>
          <FormGen fields={fields} submitText="Edytuj" validate={(e) => {
          actions.updateModel({
            endpoint,
            name,
            reducer: name,
            data   : {
              ...initialData,
              ...e
            }
          })
          toggle();
        }} values={values}/>
        </ModalBody>
      </Modal>
    )
  }
}
export
default UpdateModal