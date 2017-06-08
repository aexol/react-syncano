import React,
{
	PropTypes
}
from 'react';
import {
	connect
}
from 'react-redux';
import {
	push
}
from 'react-router-redux'
import Button from '../../material/button.jsx';
class GoPremium extends React.Component {
	render () {
		const {
			dispatch
		} = this.props;
		return (
			<div className="GoPremium">
				<h1>Usługa premium</h1>
				<p>
					Dołącz do organizacji lub stwórz swoją, aby korzystać z tej części serwisu
				</p>
				<Button label="Zobacz więcej" onClick={() => {
					dispatch(push('/organizacja'))
				}}/>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({})
export
default connect(mapStateToProps)(GoPremium);