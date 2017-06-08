import React,
{
	PropTypes
}
from 'react';
import './Coop.scss';
import UserTile from './media/UserTile.jsx';
import MessageTile from './media/MessageTile.jsx';
import ScrollToBottom from './media/ScrollToBottom.jsx';
const Coop = ({
	users,
	message_user,
	currentMessage,
	typeMessage,
	messages,
	onChangeUser,
	onSendMessage
}) => (
	<div className="Coop">
		<div className="Users">
			<div className='main_bar'>
				<div className='title'>Uzytkownicy</div>
			</div>
			<div className='ListWrapper'>
				<div className="List">
					{users.map(u => (
				<UserTile active={message_user.id == u.id} key={u.username} onClick={onChangeUser} user={u}/>
		))}
				</div>
			</div>
		</div>
		<div className="Messages">
			<div className='Title'>
				<div className='title'>Wiadomości</div>
			</div>
			<ScrollToBottom className="List">
				{messages.map(message => (
				<div className="DayMessages" key={message.date}>
					<div className="DateBar">{message.date}</div>
					{message.messages.map(m => (
						<MessageTile green={message_user.id !== m.to} key={m.date} {...m}/>
				))}
				</div>
		))}
			</ScrollToBottom>
			<div className="Enter">
				<form onSubmit={onSendMessage}>
					<input onChange={typeMessage} placeholder="Wpisz wiadomość" type="text" value={currentMessage}/>
				</form>
			</div>
		</div>
	</div>
)
export
default Coop