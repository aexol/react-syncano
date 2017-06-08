import React,
{
	PropTypes
}
from 'react'
import './button.scss';
const buttonStyle = {
	padding: "5px",
	color: "white",
	backgroundColor: "#0F5",
	textTransform: "uppercase"
}
class Button extends React.Component {
	render () {
		return (
			<a className="PButton" onClick={() => {
					this.props.onClick()
				}}>
				<span className="plabel">{this.props.label}</span>
				<span className="pextra">{this.props.extra}</span>
			</a>
		)
	}
}
Button.propTypes = {
	label: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func.isRequired
}
export
default Button;