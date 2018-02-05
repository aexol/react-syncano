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
        name: "file",
        type: "file",
      },
      {
        name: "tag",
        type: "tag"
      },
      {
        name: "datetime",
        type: "datetime"
      },
      {
        name: "object",
        type: "object"
      },
      {
        name: "geo",
        type: "geo"
      },
      {
        name: "float",
        type: "float"
      },
      {
        name: "integer",
        type: "integer"
      },
      {
        name: "boolean",
        type: "boolean"
      },
      {
        name: 'reference',
        type: 'reference',
        values: [
          {
            id: 1,
            name: "Ref 1"
          },
          {
            id: 2,
            name: "Ref 2"
          },
          {
            id: 3,
            name: "Ref 3"
          },
          {
            id: 4,
            name: "Ref 4"
          }
        ]
      },
      {
        name: 'relation',
        type: 'relation',
        values: [
          {
            id: 1,
            name: "Ref 1"
          },
          {
            id: 2,
            name: "Ref 2"
          },
          {
            id: 3,
            name: "Ref 3"
          },
          {
            id: 4,
            name: "Ref 4"
          }
        ]
      }
    ]
    return (
      <div className='Demo' style={{
        width:320,
        margin:'auto'
      }}>
        <h3>Demo form</h3>
        {/* Simple form */}
        <FormGenerator validate={() => {
          this.setState({
            textareaerrors: ['blad textarea']
          })
        }} fields={fieldsDemo} />
        {/* Alternative form with own wrapper */}
        {/* <FormGenerator AlternativeWrapper={MyFieldWrapper} validate={() => {
          this.setState({
            textareaerrors: ['blad textarea']
          })
        }} fields={fieldsDemo} /> */}
      </div>
    )
  }
}
export default withRouter(Home)
