import React,
{
	PropTypes
}
from 'react';
import './UserTile.scss';
const placeholderImage = require("../../../images/no_photo.jpg");
const UserTile = ({
	user,
	onClick,
	active
}) => (
	<div className={active ? 'UserTile active' : 'UserTile'} onClick={() => {
			onClick(user)
		}}>
		<span>{user.full_name}</span>
	</div>
)
export
default UserTile