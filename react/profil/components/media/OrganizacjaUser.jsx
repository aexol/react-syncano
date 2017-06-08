import React,
{
	PropTypes
}
from 'react'
import './OrganizacjaUser.scss';
const OrganizacjaUser = ({
	first_name,
	last_name,
	full_name,
	username
}) => (
	<div className='OrganizacjaUser'>
		<div className='Name'>
			{full_name}
		</div>
	</div>
)
export
default OrganizacjaUser;