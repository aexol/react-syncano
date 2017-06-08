import React,
{
	Component,
	PropTypes
}
from "react";
import {
	findDOMNode
}
from "react-dom";
class ScrollToBottom extends Component {
	componentDidMount() {
		const node = findDOMNode(this);
		const nodeHeight = node.height;
		const scrollHeight = node.scrollHeight;
	}
	componentWillUpdate() {
		const node = findDOMNode(this);
		this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
	}
	componentDidUpdate() {
		const node = findDOMNode(this);
		node.scrollTop = node.scrollTop + 100000000000;
	}
	render() {
		const {
			className,
			children
		} = this.props;
		const style = {
			overflowY: "scroll"
		};
		return (
			<div className={`Scroll-To-Bottom ${className}`} style={style}>{children}</div>
		);
	}
}
ScrollToBottom.propTypes = {
	className: PropTypes.string,
	children: PropTypes.arrayOf(PropTypes.node).isRequired
};
ScrollToBottom.defaultProps = {};
export
default ScrollToBottom;