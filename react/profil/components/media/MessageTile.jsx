import React,
{
	PropTypes
}
from 'react'
import moment from 'moment';
import './MessageTile.scss';
const MessageTile = ({
	author,
	date,
	green,
	text
}) => (
	<div className="MessageTile">
		<div className={green ? "author reply" : "author"}>
			{author.full_name}
		</div>
		<div className="date">
			{moment(date).format("HH:mm:ss")}
		</div>
		<div className="text">
			{text}
		</div>
	</div>
)
export
default MessageTile