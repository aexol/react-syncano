import React from 'react'
import {
	connect
}
from 'react-redux'
import {
	djangoJWT
}
from '../../django';
import PButton from '../../material/button.jsx';
import {
	addAlert
}
from '../actions/alerts.jsx';
import * as types from '../constants/alerts.jsx';
import './EditContainer.scss';
class EditContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: ''
		}
	}
	componentWillMount() {
		this.onLoad();
	}
	onLoad = () => {
		djangoJWT("/rest-auth/user/", {}).then(response => response.json()).then(json => this.setState({
			...this.state,
			...json
		}))
	}
	onSubmit = () => {
		const {
			first_name,
			last_name
		} = this.state;
		const {
			dispatch
		} = this.props;
		djangoJWT("/rest-auth/user/", {
			method: "patch",
			body: JSON.stringify({
				first_name,
				last_name
			})
		}).then(response => response.json()).then(json => dispatch(addAlert(`Dane użytkownika ${json.email} zmieniono pomyślnie`)))
	}
	onChange(name, value) {
		this.setState({
			[name]: value
		})
	}
	render () {
		return (
			<div className="EditContainer">
				<div className='main_bar'>
					<div className='title'>Mój profil</div>
				</div>
				<div>
					<input onChange={(e) => {
					this.onChange("first_name", e.target.value)
				}} placeholder="Imię" type="text" value={this.state.first_name}/>
				</div>
				<div>
					<input onChange={(e) => {
					this.onChange("last_name", e.target.value)
				}} placeholder="Nazwisko" type="text" value={this.state.last_name}/>
				</div>
				<div>
					<PButton label="Potwierdź zmiany" onClick={this.onSubmit}/>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	...state
})
export
default connect(mapStateToProps)(EditContainer);