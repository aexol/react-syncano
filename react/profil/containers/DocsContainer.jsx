import React,
{
	PropTypes
}
from 'react'
import {
	connect
}
from 'react-redux'
import {
	bindActionCreators
}
from 'redux';
import Docs from '../components/Docs.jsx'
import * as actions from '../actions';
class DocsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			terminyOpen: false,
			miejsce: "",
			data: "",
			termin_id: ""
		}
	}
	onDrop = (files) => {
		const {
			uploadAkta
		} = this.props.actions;
		for (var f of files) {
			uploadAkta(f)
		}
	}
	onDelete = (id) => {
		const {
			deletePlikAkt
		} = this.props.actions;
		deletePlikAkt(id)
	}
	onDocsExpand = (id) => {
		const {
			setActiveAkta,
			getModel
		} = this.props.actions;
		setActiveAkta(id)
		if (id) {
			getModel({
				name: "terminy",
				reducer: "akta_terminy",
				endpoint: `/rest/terminakt/${id}/`
			})
		}
	}
	componentWillMount() {
		const {
			isPremium,
			getModel
		} = this.props.actions;
		isPremium()
		getModel({
			name: "akta",
			endpoint: "/rest/akta/"
		})
		getModel({
			name: "klienci",
			endpoint: `/rest/klienci/`
		})
	}
	render () {
		const {
			docs,
			files,
			terminy,
			klienci,
			active,
			actions
		} = this.props;
		const docsManagerProps = {
			files,
			terminy,
			actions,
			akta: active,
			onDrop: this.onDrop,
			onDelete: this.onDelete
		}
		return (
			<Docs actions={actions} active={active} docs={docs} docsManagerProps={docsManagerProps} klienci={klienci} onDocsExpand={this.onDocsExpand} {...this.state}/>
		)
	}
}
const mapStateToProps = (state) => ({
	docs: state.uni.akta ? state.uni.akta : [],
	files: state.docs.files,
	terminy: state.uni.akta_terminy ? state.uni.akta_terminy : [],
	klienci: state.uni.klienci ? state.uni.klienci : [],
	active: state.docs.active,
	me: state.users.me
})
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})
export
default connect(mapStateToProps, mapDispatchToProps)(DocsContainer);