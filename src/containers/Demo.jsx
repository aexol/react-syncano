import React, { PropTypes } from 'react'
import { withRouter } from 'react-router-dom'
import FormGenerator from "../syncano/utils/FormGenerator";
import { withSyncano } from "../syncano/decorators"
import * as actions from '../syncano/generator/generated'
const MyFieldWrapper = ({ children, errors = [], ...props }) => (
  <div className="FieldWrapper">
    <label>{props.name}</label>
    {children}
    {errors.map(e => <div className='errors' key={e}>{e}</div>)}
  </div>
)

@withSyncano()
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textareaerrors: []
    }
  }
  componentWillReceiveProps(nextProps) {
    const { socket } = this.props
    if (this.props.valid !== nextProps.valid && nextProps.valid) {
      socket(actions.restFrameworkList({
        model: 'dummy',
        success: dummy => ({ dummy }),
      }))
    }
  }
  componentWillMount() {
    const { socket, syncanoValid } = this.props
    syncanoValid()
  }
  render() {
    const { dummy = [] } = this.props
    const textareaerror = "Blad textarea"
    const fieldsDemo = [
      {
        name: "string",
        type: "string",
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
        width: 320,
        margin: 'auto'
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
        <h3>Dummies</h3>
        <div style={{
          display:'flex',
          flexFlow:'row wrap',
          width:180,
          height:180
        }}>
          {dummy.map(d => (
            <div style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              margin:'auto',
              borderColor: 'red',
              borderStyle: 'solid',
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            }}>{d.id}</div>
          ))}
        </div>
      </div>
    )
  }
}
export default withRouter(Home)
