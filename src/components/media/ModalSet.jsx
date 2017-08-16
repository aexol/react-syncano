import AddModal from './AddModal.jsx';
import DeleteModal from './DeleteModal.jsx';
import UpdateModal from './UpdateModal.jsx';
import React,
{
  PropTypes
}
from 'react'
class ModalSet extends React.Component {
  render () {
    const {
      actions,
      name,
      add,
      update,
      del,
      fields,
      values,
      open,
      toggle,
      initialDataAdd,
      initialDataUpdate,
      id
    } = this.props;
    const {
      addText = `Dodaj ${name}`,
      updateText = `Edytuj ${name}`,
      deleteText = `Czy na pewno chcesz usunąć ${name}?`
    } = this.props;
    const deleteText1 = `Usuń ${name}`;
    return (
      <div className="ModalSet">
        <AddModal actions={actions} endpoint={add} fields={fields} initialData={initialDataAdd} isOpen={open === "add"} name={name} text={addText} toggle={toggle}/>
        <UpdateModal actions={actions} endpoint={update} fields={fields} initialData={initialDataUpdate} isOpen={open === "update"} name={name} text={updateText} toggle={toggle} values={values}/>
        <DeleteModal actions={actions} endpoint={del} id={id} isOpen={open === "delete"} name={name} text={deleteText1} toggle={toggle} warning={deleteText}/>
      </div>
    )
  }
}
export
default ModalSet