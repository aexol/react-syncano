import React,
{
  PropTypes
}
from 'react'
import './App.scss';
import {
  Link
}
from 'react-router';
import FormGen from '../utils/formgen.jsx';
import {
  Nav,
  NavItem,
  NavLink
}
from 'reactstrap';
import FontAwesome from 'react-fontawesome';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      actions,
      username,
      alerts
    } = this.props;
    const alertsContainer = alerts.length > 0 ? (
      <div className='Alerts'>
        {alerts.map(a => (
            <div className={`Alert n-${a.id}`} key={a.id}>
              {a.text}
            </div>
        ))}
      </div>
    ) : []
    return (
      <div className="App">
        {alertsContainer}
        <div className='TopNav'>
          <div className='logo'>
            <div className='title'>{username}</div>
          </div>
          <FontAwesome name="sign-out" onClick={actions.logout}/>
        </div>
        <div className='Content'>
          <div className='Nav'>
            <Nav vertical>
              <NavItem>
                <Link className="nav-link" to="/home/"><FontAwesome name="list-alt"/>Home</Link>
              </NavItem>
            </Nav>
          </div>
          <div className='MainContent'>{this.props.children}</div>
        </div>
      </div>
    )
  }
}
export
default App;