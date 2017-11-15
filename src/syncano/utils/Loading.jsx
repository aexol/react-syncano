import React, { PropTypes } from 'react'
class Loading extends React.Component {
    render () {
        return (
            <div className="Loading">
              {this.props.children}
            </div>
        )
    }
}
export default Loading
