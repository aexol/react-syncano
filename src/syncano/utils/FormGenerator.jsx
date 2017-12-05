import React, {PropTypes} from 'react'
import 'react-select/dist/react-select.css'
import classnames from 'classnames'
import {connect} from 'react-redux'
import {display} from '../../display'
import {
  DatepickerField,
  FileField,
  GeoField,
  SelectField,
  TagField,
  TextareaField,
  TextField
} from './fields'
import receive from './receivers'
const getBase64 = (file, callback) => {
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    callback(reader.result)
  }
  reader.onerror = function (error) {
    console.log('Error: ', error)
  }
}
const validators = {
  normal: {},
  syncano: {
    select: e => (Array.isArray(e) ? e.map(p => p.value) : e.value),
    tag: e => (Array.isArray(e) ? e.map(p => p.value) : e.value),
    geo: e => ({
      latitude:e.split(',')[0],
      longitude:e.split(',')[0]
    })
  }
}

const fieldElements = {
  // TODO: datetime input
  text: TextField,
  textarea: TextareaField,
  select: SelectField,
  file: FileField,
  geo: GeoField,
  tag: TagField,
  datepicker: DatepickerField
}
@connect(
  state => ({
    ...state
  }),
  {}
)
class FormGenerator extends React.Component {
  constructor (props) {
    super(props)
    const {fields} = this.props
    var newFields = {}
    for (var f of fields) {
      newFields[f.name] = ''
    }
    this.state = {
      fields: {
        ...newFields
      },
      initial: {
        ...newFields
      }
    }
  }
  componentWillMount () {
    this.componentWillReceiveProps(this.props)
  }
  componentWillReceiveProps (nextProps) {
    const {fields, validator, values} = nextProps
    var newFields = {}
    for (var f of fields) {
      newFields[f.name] = values[f.name]
        ? receive({data: values[f.name], ...f})
        : ''
    }
    var updateDict = {
      initial: {
        ...newFields
      }
    }
    if (Object.keys(values).length > 0) {
      updateDict = {
        ...updateDict,
        fields: {
          ...newFields
        }
      }
    }
    this.setState(updateDict)
  }
  validate () {
    const {validator = 'syncano', fields, isFormData = false} = this.props
    var sfields = {
      ...this.state.fields
    }
    const filteredValidate = Object.keys(sfields).filter(
      k => sfields[k] !== this.state.initial[k]
    )
    let returnData = filteredValidate.reduce(
      (accumulator, currentValue, currentIndex, array) => {
        accumulator[currentValue] = sfields[currentValue]
        return accumulator
      },
      {}
    )
    if (validator) {
      const va = validators[validator]
      for (var f of fields) {
        if (returnData[f.name]) {
          returnData[f.name] = va[f.type]
            ? va[f.type](returnData[f.name])
            : returnData[f.name]
        }
      }
    }
    if (isFormData) {
      returnData = new FormData()
      for (var [key, value] of returnData) {
        fd.append(
          key,
          Array.isArray(value) || typeof value === 'object'
            ? JSON.stringify(value)
            : value
        )
      }
    }
    this.props.validate(returnData)
  }
  render () {
    const {fields, submitText, invalid = []} = this.props
    console.log(fields)
    const fieldsRender = fields.map(f => {
      let Field = {...f}
      if (Field.target) {
        console.log(Field)
        if (typeof this.props[Field.target] === 'undefined') {
          return
        }
        Field.values = this.props[Field.target]
        Field.label = display(Field.target)
      }
      const Component = fieldElements[Field.type]
      return Component({
        ...Field,
        invalid: invalid[Field.name],
        t: this
      })
    })
    return (
      <div className='FormGen'>
        {fieldsRender}
        <div
          className='Submit'
          onClick={() => {
            this.validate()
          }}
        >
          {submitText || 'Submit'}
        </div>
      </div>
    )
  }
}
FormGenerator.defaultProps = {
  values: {}
}
export default FormGenerator
