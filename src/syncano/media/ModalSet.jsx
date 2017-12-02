import AddModal from './AddModal.jsx'
import DeleteModal from './DeleteModal.jsx'
import UpdateModal from './UpdateModal.jsx'
import React, {PropTypes} from 'react'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

class ModalSet extends React.Component {
  render () {
    const {
      actions,
      name,
      fields,
      values,
      open,
      toggle,
      initialDataAdd,
      initialDataUpdate,
      id
    } = this.props
    const {
      addText = `Add ${name}`,
      updateText = `Edit ${name}`,
      deleteText = `Do you really want to delete ${name}?`
    } = this.props
    const deleteText1 = `Delete ${name}`
    return (
      <div className='ModalSet'>
        <AddModal
          fields={fields}
          initialData={initialDataAdd}
          isOpen={open === 'add'}
          name={name}
          text={addText}
          toggle={toggle}
        />
        <UpdateModal
          fields={fields}
          initialData={initialDataUpdate}
          isOpen={open === 'update'}
          name={name}
          text={updateText}
          toggle={toggle}
          values={values}
        />
        <DeleteModal
          values={values}
          isOpen={open === 'delete'}
          name={name}
          text={deleteText1}
          toggle={toggle}
          warning={deleteText}
        />
      </div>
    )
  }
}
export default ModalSet
