import React,
{
  PropTypes
}
from 'react'
import FormGen from '../utils/formgen.jsx';
import './Login.scss';
class Login extends React.Component {
  render () {
    const {
      actions,
      alerts
    } = this.props;
    const fields = [
      {
        name: "username",
        placeholder: "email",
        type: "text"
      }, {
        name: "password",
        placeholder: "hasło",
        type: "text",
        inputType: "password"
      }
    ];
    return (
      <div className="Login">
        <div className='Act'>
          <FormGen fields={fields} submitText={"Zaloguj się"} validate={(e) => {
          actions.login(e)
        }}/>
          <div className='errorsField'>
            {alerts.map(a => (
            <div className='err' key={a.id}>{a.text}</div>
        ))}
          </div>
        </div>
      </div>
    )
  }
}
export
default Login