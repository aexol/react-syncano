import React, {PropTypes} from 'react'
import classnames from 'classnames'
import './Modal.scss'

export class Modal extends React.Component {
  render () {
    const {isOpen} = this.props
    return (
      <div
        className={classnames({
          Modal: true,
          open: isOpen
        })}
      >
        <div className='Dialog'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export class ModalHeader extends React.Component {
  render () {
    const {
      toggle
    } = this.props
    return (
      <div className='ModalHeader'>
        <div className='Close' onClick={toggle}><div>×</div></div>
        <span> {this.props.children}</span>
      </div>
    )
  }
}
export class ModalBody extends React.Component {
  render () {
    return (
      <div className='ModalBody'>
        {this.props.children}
      </div>
    )
  }
}
export class ModalFooter extends React.Component {
  render () {
    return (
      <div className='ModalFooter'>
        {this.props.children}
      </div>
    )
  }
}
export class ModalChangePassword extends React.Component {
  render () {
    const {isOpen} = this.props
    return (
      <div
        className={classnames({
          'change-password': true
        })}
      >
        <div className='Dialog'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
