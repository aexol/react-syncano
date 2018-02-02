import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FormGenerator from "../syncano/utils/FormGenerator";

const MyFieldWrapper = ({ children, errors = [], ...props }) => (
  <div className="FieldWrapper">
    <label>{props.name}</label>
    {children}
    {errors.map(e => <div className='errors' key={e}>{e}</div>)}
  </div>
)

@connect(
  state => ({
    valid: state.valid
  }),
  {
    // Put actions here
  }
)
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textareaerrors: []
    }
  }
  render() {
    const textareaerror = "Blad textarea"
    const fieldsDemo = [
      {
        name: "text",
        type: "text",
        required: true,
        pattern: /^\d+$/
      },
      {
        name: "textarea",
        type: "textarea",
        errors: this.state.textareaerrors
      },
      {
        name: "file",
        type: "file",
      },
      {
        name: "datetime",
        type: "datetime"
      },
      {
        name: "geo",
        type: "geo"
      }
    ]
    return (
      <div className='Demo'>
        {/* Simple form */}
        <FormGenerator validate={() => {
          this.setState({
            textareaerrors: ['blad textarea']
          })
        }} fields={fieldsDemo} />
        {/* Alternative form with own wrapper */}
        <FormGenerator AlternativeWrapper={MyFieldWrapper} validate={() => {
          this.setState({
            textareaerrors: ['blad textarea']
          })
        }} fields={fieldsDemo} />
      </div>
    )
  }
}
export default withRouter(Home)
