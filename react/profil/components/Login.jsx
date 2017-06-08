import React,
{
	PropTypes
}
from 'react'
import FullButton from '../../material/fullbutton.jsx';
import './Login.scss';
import FormGen from '../../material/formgen.jsx';
const forgot = [
	{
		name: "email",
		placeholder: "email",
		type: "text",
		inputType: "email"
	},
]
const fields = [
	{
		name: "username",
		placeholder: "email",
		type: "text",
		inputType: "email"
	}, {
		name: "password",
		placeholder: "hasło",
		type: "text",
		inputType: "password"
	},
]
const register = [
	{
		name: "email",
		placeholder: "Adres email",
		type: "text",
		inputType: "email"
	}, {
		name: "password1",
		placeholder: "hasło",
		type: "text",
		inputType: "password"
	}, {
		name: "password2",
		placeholder: "powtórz hasło",
		type: "text",
		inputType: "password"
	}, {
		name: "first_name",
		placeholder: "Imię",
		type: "text"
	}, {
		name: "last_name",
		placeholder: "Nazwisko",
		type: "text"
	}
];
class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className="Login">
				<div className='main_bar'>
					<div className='title'>Witaj w aplikacji Prawowpolsce</div>
				</div>
				<div className='LoginContent'>
					<div className='LoginPart'>
						<div className='LoginTitle'><span>Logowanie</span></div>
						<div className='LoginSub'>Zaloguj się po szybki dostęp do najlepszych narzędzi prawniczych w Polsce. Przyspiesz swoją pracę.</div>
						<div className='LoginInputs'>
							<FormGen fields={fields} submitText={"Zaloguj"} validate={(e) => {
					this.props.actions.login(e.username, e.password)
				}}/>
						</div>
						<div className='LoginTitle'><span>Zapomniałem hasła</span></div>
						<div className='LoginInputs'>
							<FormGen fields={forgot} submitText={"Przypomnij"} validate={(e) => {
					this.props.actions.forgotPassword(e.email)
				}}/>
						</div>
					</div>
					<div className='LoginPart'>
						<div className='LoginTitle'><span>Rejestracja</span></div>
						<div className='LoginSub'>Nie jesteś jeszcze naszym użytkownikiem? Zarejestruj się teraz i otrzymaj darmowy dostęp do najlepszych narzędzi dla kancelarii w Polsce. Komunikator firmowy, szyfrowane wspólne akta elektroniczne, kalendarz rozpraw i słownik legal english - w jednym narzędziu, zawsze pod ręką
						</div>
						<div className='LoginInputs'>
							<FormGen fields={register} submitText={"Zarejestruj się"} validate={(e) => {
					this.props.actions.register(e)
				}}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export
default Login