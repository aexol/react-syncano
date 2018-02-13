import React, { PropTypes } from 'react'
import 'react-select/dist/react-select.css'
import classnames from 'classnames'
import {
  DatetimeField,
  FileField,
  GeoField,
  SelectField,
  TagField,
  TextareaField,
  ObjectField,
  RelationField,
  TextField,
  NumberField,
  BooleanField
} from './fields'

import receive from './receivers'
import FieldWrapper from "./FieldWrapper"
import SubmitComponent from './SubmitComponent'
import { withSyncano } from '../decorators';
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
    reference: e => e.value,
    relation: e => e.map(p => p.value),
    tag: e => (Array.isArray(e) ? e.map(p => p.value) : e.value),
  }
}

const fieldElements = {
  string: TextField,
  boolean: BooleanField,
  integer: NumberField,
  float: NumberField,
  relation: RelationField,
  text: TextareaField,
  select: SelectField,
  file: FileField,
  geo: GeoField,
  tag: TagField,
  datetime: DatetimeField,
  object: ObjectField,
  relation: RelationField,
  reference: SelectField
}


@withSyncano()
class FormGenerator extends React.Component {
  constructor(props) {
    super(props)
    const { fields } = this.props
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
      },
      changed: {

      },
      errors: {}
    }
  }
  componentWillMount() {
    const { fields, validator, values } = this.props
    let newFields = {}
    for (var f of fields) {
      newFields[f.name] = values[f.name]
        ? receive({ data: values[f.name], ...f })
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
  componentWillReceiveProps(nextProps){
    const { values } = this.props
    if(nextProps.values && nextProps.values !== values){
      let updateDict = {}
      for(var key of Object.keys(this.state.fields)){
        updateDict[key] = nextProps.values[key]
      }
      this.setState({
        fields:{
          ...this.state.fields,
          ...updateDict
        }
      })
    }
  }
  validate = (e) => {
    e.preventDefault()
    const { validator = 'syncano', fields, isFormData = false } = this.props
    var sfields = {
      ...this.state.fields
    }
    const filteredValidate = Object.keys(sfields).filter(k => !!this.state.changed[k])
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
  modifyField = ({ name, value }) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      },
      changed: {
        ...this.state.changed,
        [name]: true
      }
    })
  }
  render() {
    const { fields, submitText, AlternativeWrapper = FieldWrapper } = this.props
    const { Submit = SubmitComponent } = this.props
    const fieldsRender = fields.map((f, i) => {
      let Field = { ...f }
      if (Field.target) {
        if (typeof this.props[Field.target] === 'undefined') {
          return
        }
        Field.values = this.props[Field.target]
        Field.label = Field.display || 'id'
      }
      const Component = fieldElements[Field.type]
      let { errors, ...FieldValues } = Field
      FieldValues = {
        ...FieldValues,
        pattern: FieldValues.pattern ? FieldValues.pattern.toString().replace(/\//g, "") : undefined
      }
      return (
        <AlternativeWrapper {...FieldValues} key={i} errors={errors}>
          <Component changed={!!this.state.changed[Field.name]} modifyField={this.modifyField} fieldValue={this.state.fields[Field.name]} {...FieldValues} />
        </AlternativeWrapper>
      )
    })
    return (
      <form onSubmit={this.validate} className='FormGen'>
        {fieldsRender}
        <Submit />
      </form>
    )
  }
}
FormGenerator.defaultProps = {
  values: {}
}
export default FormGenerator
