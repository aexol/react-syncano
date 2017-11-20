import React, { PropTypes } from 'react'
import './Tip.scss'
class Tip extends React.Component {
    render () {
        return (
            <div className="Tip">
            {this.props.children}
            </div>
        )
    }
}
export default Tip
