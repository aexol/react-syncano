import React,
{
  PropTypes
}
from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
}
from 'reactstrap';
import {
  Link
}
from 'react-router';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import FormGen from '../../utils/formgen.jsx';
class DeleteModal extends React.Component {
  render () {
    const {
      actions,
      isOpen,
      toggle,
      endpoint,
      id,
      text,
      warning,
      name
    } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{text}</ModalHeader>
        <ModalBody>{warning}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => {
          actions.deleteModel({
            endpoint,
            name,
            id,
            reducer: name
          })
          toggle()
        }}>Usuń {name}</Button>{' '}
          <Button color="secondary" onClick={toggle}>Anuluj</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
export
default DeleteModal