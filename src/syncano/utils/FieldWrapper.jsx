import React, { PropTypes } from 'react'
class FieldWrapper extends React.Component {
  render() {
    const {
      children,
      errors = [],
      ...props
    } = this.props
    return (
      <div className="FieldWrapper">
        {children}
        {errors.map(e => <div className='errors' key={e}>{e}</div>)}
      </div>
    )
  }
}
export default FieldWrapper
