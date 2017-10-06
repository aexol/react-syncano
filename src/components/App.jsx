import React,
{
  PropTypes
}
from 'react'
import './App.scss'
class App extends React.Component {
  render () {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}
export
default App
