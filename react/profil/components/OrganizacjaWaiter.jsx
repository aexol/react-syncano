import React,
{
	PropTypes
}
from 'react';
import DescBar from '../../material/descbar.jsx';
import './OrganizacjaWaiter.scss';
import Inviter from './media/Inviter.jsx';
import FormGen from '../../material/formgen.jsx';
import Really from '../../material/really.jsx';
import PModal from '../../material/modal.jsx';
const organizacjaFields = [
	{
		name: "nazwa",
		type: "text"
	},
]
class OrganizacjaWaiter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			createo: false,
			orgdata: {}
		}
	}
	render () {
		const {
			actions,
			inviters
		} = this.props;
		return (
			<div className="OrganizacjaWaiter">
				<div className='Invites'>
					<div className='main_bar'>
						<div className='title'>Moja organizacja</div>
					</div>
					<div className='InviteContent'>
						<div className='InviteCard'>
							<div className='InviteTitle'><span>Stwórz organizację</span></div>
							<div className='InviteDetails'>
								<p>Tu możesz stworzyć swoją organizację bądź zaakceptować zaproszenie do już istniejącej</p>
								<p>Komunikator, szyfrowane akta elektroniczne i kalendarz wymagają przynależności do organizacji. Jeśli pracujesz sam stwórz organizację dla samego siebie. Nigdy nie wiadomo , kiedy rozwinie się twoja kancelaria</p>
								<FormGen fields={organizacjaFields} submitText={"Stwórz organizację"} validate={(e) => {
					this.setState({
						createo: true,
						orgdata: e
					})
				}}/>
							</div>
						</div>
						<div className='InviteCard'>
							<div className='InviteTitle'><span>Moje zaproszenia</span></div>
							<div className='InviteDetails'>
								<div className='Inviters'>
									{inviters.length == 0 ? (
						<div className='empty'>Brak oczekujących zaproszeń</div>
				) : inviters.map(i => (
						<Inviter accept={() => {
							actions.acceptInviter(i.id);
						}} key={i.id} {...i.organizacja}/>
				))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Really accept={() => {
					this.setState({
						createo: false
					})
					actions.createOrganisation(this.state.orgdata)
				}} cancel={() => {
					this.setState({
						createo: false
					})
				}} isOpen={this.state.createo} q="Czy na pewno chcesz stworzyć organizację( jeśli ktoś z twojej kancelarii już to zrobił poczekaj na zaproszenie od niego) ?"/>
			</div>
		)
	}
}
export
default OrganizacjaWaiter