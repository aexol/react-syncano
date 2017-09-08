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
import {
  Link
}
from 'react-router';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
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
  element,
  toggleDeleteModal,
  toggleEdit
}) => (
  <div className='elements'>
    <FontAwesome name="trash-o" onClick={() => {
      toggleDeleteModal(value)
    }}/>
    <FontAwesome name="pencil" onClick={() => {
      toggleEdit(value)
    }}/>
      {element(value)}
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
      element,
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
        <SortableList axis={"y"} element={element} elements={elements} onSortEnd={this.onSortEnd} toggleDeleteModal={(element) => {
          this.toggleOpenModal("delete", element)
        }} toggleEdit={(element) => {
          this.toggleOpenModal("update", element)
        }}/>
        <ModalSet initialDataAdd={initialDataAdd} initialDataUpdate={initialDataUpdate} del={del} actions={actions} add={add} fields={elementFields} id={this.state.activeElement.id} name={name} open={this.state.openModal} toggle={this.toggleOpenModal} update={update} values={this.state.activeElement}/>
      </div>
    )
  }
}
export
default Sortable