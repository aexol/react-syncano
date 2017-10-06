import React, {PropTypes} from 'react'
import './EditableString.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
class EditableString extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentWillReceiveProps (props) {
    const {actions, name, content} = this.props
    if (props.text.length > 0) {
      let str = props.text.filter(s => s.name === name)
      if (str.length === 0) {
        console.log('NOSTRING')
      }
    }
  }
  render () {
    const {save, name, text, valid, content} = this.props
    const isAdmin = valid
    let thisText = 'Loading...'
    if (text && text.length) {
      thisText = text.filter(s => s.name === name)
      if (thisText.length > 0) {
        thisText = thisText[0]
      } else {
        thisText = {
          content
        }
      }
    }
    if(!isAdmin){
      return (
        <span>
          {thisText.content}
        </span>
      )
    }
    return (
      <span
        className='EditableString'
        name={name}
        onClick={e => {
          e.preventDefault()
        }}
      >
        <span
          suppressContentEditableWarning
          ref='edit'
          contentEditable={isAdmin}
        >
          {thisText.content}
        </span>
        {isAdmin &&
          <span
            className='saveEditableString'
            onClick={() => {
              save(thisText.id, this.refs.edit.innerHTML)
            }}
          >
            save
          </span>}
      </span>
    )
  }
}
const mapStateToProps = state => ({
  ...state,
  text: state.uni.text ? state.uni.text : [],
  valid: state.auth.valid
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(EditableString)
