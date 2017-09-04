import React,
{
  PropTypes
}
from 'react'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledTooltip,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemTextListGroup
}
from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import '../Menu.scss';
import FormGen from '../../utils/formgen.jsx';
import {
  SortableContainer,
  SortableElement,
  arrayMove
}
from 'react-sortable-hoc';
import ModalSet from './ModalSet.jsx';
const Element = SortableElement(({
  value,
  toggleDeleteModal,
  toggleEdit
}) => (
  <div className='danieelements'>
    <FontAwesome name="trash-o" onClick={() => {
      toggleDeleteModal(value)
    }}/>
    <FontAwesome name="pencil-o" onClick={() => {
      toggleEdit(value)
    }}/>
      {Object.keys(value).map(k => (
        <div className={`${k}`}>{value[k]}</div>
    ))}
  </div>
));
const SortableList = SortableContainer((props) => {
  return (
    <div className="elementRoot">
      {props.elements.map((value, index) => (
          <Element index={index} key={`item-${value.id}`} value={value} {...props}/>
      ))}
    </div>
  )
});
class Sortable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: "none",
      activeElement: {}
    }
    this.toggleOpenModal = this.toggleOpenModal.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  onSortEnd({
    oldIndex,
    newIndex
  }) {
    const {
      elements,
      actions,
      endpoints: {
        sort
      }
    } = this.props;
    const newElements = elements.map(i => i.id);
    const moved = arrayMove(newElements, oldIndex, newIndex);
    if (String(newElements) !== String(moved)) {
      actions.resortModel({
        endpoint: sort,
        name: "elements",
        data: moved
      });
    }
  }
  toggleOpenModal(name = "none", element = {}) {
    console.log(name);
    this.setState({
      openModal: name,
      activeElement: element
    });
  }
  render () {
    const {
      elements,
      actions,
      endpoints: {
        add,
        update,
        del
      },
      initialDataAdd = {},
      initialDataUpdate = {},
      elementFields = [],
      name = "elements"
    } = this.props;
    return (
      <div className="elementsMenu">
        <div className='addElement' onClick={() => {
          this.toggleOpenModal("add")
        }}><span aria-hidden="true"><FontAwesome name={"plus"}/></span>
        </div>
        <SortableList axis={"y"} elements={elements} onSortEnd={this.onSortEnd} toggleDeleteModal={(element) => {
          this.toggleOpenModal("delete", element)
        }} toggleEdit={(element) => {
          this.toggleOpenModal("update", element)
        }}/>
        <ModalSet initialDataUpdate={initialDataUpdate} id={this.state.activeElement.id} del={del} actions={actions} add={add} fields={elementFields} initialDataAdd={initialDataAdd} name={name} open={this.state.openModal} toggle={this.toggleOpenModal} update={update} values={this.state.activeElement}/>
      </div>
    )
  }
}
export
default Sortable