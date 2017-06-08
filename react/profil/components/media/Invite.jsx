import React,
{
	PropTypes
}
from 'react'
import './Invite.scss';
const Invite = ({
	user,
	email
}) => (
	<div className="Invite">
		<span className="name">
			{user ? `${user.first_name} ${user.last_name}` : email}
		</span>
	</div>
)
export
default Invite