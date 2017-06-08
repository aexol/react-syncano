import React,
{
	PropTypes
}
from 'react'
import './SingleDoc.scss';
import Button from '../../../material/button.jsx';
import DocsManager from './DocsManager.jsx';
import IconLaw from '../../../images/ikony/icon.jsx';
class SingleDoc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}
	componentWillMount() {
		const {
			active,
			id
		} = this.props;
		const o = false;
		const isActive = active === id;
		if (!isActive && this.state.open) {
			setTimeout(() => {
				this.setState({
					open: true
				})
			}, 500)
		}
		if (isActive && !this.state.open) {
			this.setState({
				open: true
			})
		}
	}
	render () {
		const {
			docsManagerProps,
			active,
			data_dodania,
			id,
			sygnatura,
			nazwa,
			ilosc_plikow,
			ilosc_terminow,
			onClick,
			onClickTerminy
		} = this.props;
		const o = false;
		const isActive = active === id;
		const button = (
				<div className="Zobacz" onClick={() => {
					onClick(isActive ? null : id)
				}}>{isActive ? "zwiń" : "więcej"}</div>
		)
		return (
			<div className={`SingleDoc ${active == id ? 'active' : '' }`}>
				<div className='SingleDocContent'>
					<div className="Nazwa">{nazwa}</div>
					<div className="Sygnatura">{sygnatura}</div>
					<div className="Data">{new Date(data_dodania).toLocaleDateString()}</div>
					<div className="Pliki"><IconLaw name="spinacz_b"/><span>{ilosc_plikow}</span></div>
					<div className="Terminy"><IconLaw name="kalendarz_b"/><span>{ilosc_terminow}</span></div>
					{button}
				</div>
				<div className='SingleDocManager'>
					{isActive ? (
						<DocsManager {...docsManagerProps}/>
				) : []}</div>
			</div>
		)
	}
}
export
default SingleDoc