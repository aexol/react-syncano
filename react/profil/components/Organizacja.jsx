import React,
{
	PropTypes
}
from 'react';
import "./Organizacja.scss";
import OrganizacjaUser from './media/OrganizacjaUser.jsx';
import FullButton from '../../material/fullbutton.jsx';
import DescBar from '../../material/descbar.jsx';
import Invite from './media/Invite.jsx';
import FormGen from '../../material/formgen.jsx';
import Really from '../../material/really.jsx';
import PModal from '../../material/modal.jsx';
const profileFields = [
	{
		name: "first_name",
		placeholder: "Imię",
		type: "text"
	}, {
		name: "last_name",
		placeholder: "Nazwisko",
		type: "text"
	}
];
const inviteFields = [
	{
		name: "email",
		placeholder: "Email",
		type: "text"
	},
]
class Organizacja extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rLogout: false,
			rInvite: false,
			rSignoff: false,
			email: ""
		}
	}
	render () {
		const {
			users,
			actions,
			invites,
			profile,
			alerts
		} = this.props;
		const {
			email
		} = this.state;
		return (
			<div className="Organizacja">
				<div className='People'>
					<div className='main_bar'>
						<div className='title'>Ludzie</div>
						<div className='add' onClick={() => {
					this.setState({
						rInvite: true
					})
				}}>zaproś do organizacji +</div>
					</div>
					<div className='list'>
						<div className='title'>
							W organizacji
						</div>
							{users.map(u => (
						<div className='User' key={u.id}>
							<div>
								{u.full_name}
							</div>
						</div>
				))}
						<div className='title'>
							Zaproszeni
						</div>
							{invites.length == 0 ? (
						<div className='empty'>Brak oczekujących zaproszeń</div>
				) : invites.map(i => (
						<div className='User' key={i.id}>
							<div>
								{i.user ? `${i.email}` : i.email}
							</div>
						</div>
				))}
					</div>
				</div>
				<div className='Profil'>
					<div className='main_bar'>
						<div className='title'>Moja kancelaria</div>
					</div>
					<div className='ProfilContent'>
						<div className='ProfilCard'>
							<div className='ProfilTitle'><span>Mój profil</span></div>
							<div className='ProfilDetails'>
								<FormGen fields={profileFields} submitText={"Zmień dane"} validate={(e) => {
					actions.changeProfile(e)
				}} values={profile}/>
							</div>
						</div>
						<div className='ProfilCard'>
							<div className='ProfilTitle'><span>Moja organizacja</span></div>
							<div className='ProfilDetails'>
								<p>{`Przynależysz do organizacji `}</p>
								<div className='Submit' onClick={() => {
					this.setState({
						rSignoff: true
					})
				}}>Wypisz się</div>
							</div>
						</div>
						<div className='ProfilCard'>
							<div className='ProfilTitle'><span>Opcje profilu</span></div>
							<div className='ProfilDetails'>
								<div className='Submit' onClick={() => {
					this.setState({
						rLogout: true
					})
				}}>Wyloguj się</div>
							</div>
						</div>
					</div>
				</div>
				<PModal accept={() => {
					this.setState({
						rInvite: false
					})
					actions.inviteUser(email)
				}} acceptT={"Zaproś"} cancel={() => {
					this.setState({
						rInvite: false
					})
				}} cancelT={"Anuluj"} isOpen={this.state.rInvite}>
					<input onChange={(e) => {
					this.setState({
						email: e.target.value
					})
				}} placeholder="email" type="text" value={email}/>
				</PModal>
				<Really accept={() => {
					this.setState({
						rLogout: false
					})
					actions.logout()
				}} cancel={() => {
					this.setState({
						rLogout: false
					})
				}} isOpen={this.state.rLogout}/>
				<Really accept={() => {
					this.setState({
						rSignoff: false
					})
					actions.signOff()
				}} cancel={() => {
					this.setState({
						rSignoff: false
					})
				}} isOpen={this.state.rSignoff} q={"Czy na pewno chcesz się wypisać z organizacji!?"}/>
			</div>
		)
	}
}
export
default Organizacja