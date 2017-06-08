import React,
{
	PropTypes
}
from 'react'
import {
	connect
}
from 'react-redux'
import Legal from '../components/Legal.jsx';
import {
	searchPhrases,
	categoryPhrases
}
from '../actions/legal.jsx';
class LegalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			phrase: ""
		}
	}
	onEnter = (e) => {
		const {
			dispatch
		} = this.props;
		this.setState({
			phrase: e
		})
		if (e.length > 1) {
			dispatch(searchPhrases(e))
		}
	}
	onCategory = (category) => {
		const {
			dispatch
		} = this.props;
		dispatch(categoryPhrases(category))
	}
	render () {
		const {
			phrases
		} = this.props;
		const {
			phrase
		} = this.state;
		return (
			<Legal onCategory={this.onCategory} onEnter={this.onEnter} phrase={phrase} phrases={phrases}/>
		)
	}
}
const mapStateToProps = (state) => ({
	phrases: state.legal.phrases
})
export
default connect(mapStateToProps)(LegalContainer);