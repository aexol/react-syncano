import React, { PropTypes } from 'react'
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

import FieldWrapper from "./FieldWrapper"
import SubmitComponent from './SubmitComponent'
import { withSyncano } from '../decorators';
import moment from 'moment'
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
    array: e => (Array.isArray(e) ? e.map(p => p.value) : e.value),
    float: e => parseFloat(e),
    integer: e => parseInt(e),
    datetime: e => e.toISOString()
  }
}
const receive = ({ data, type }) => {
  let types = {
    text: data => data || '',
    string: data => data || '',
    tag: data => data ? data.map(d => ({ label: d, value: d })) : [],
    array: data => data ? data.map(d => ({ label: d, value: d })) : [],
    relation: data => data ? data.map(d => ({ label: d, value: d })) : [],
    reference: data => data ? ({ label: data, value: data }) : [],
    datetime: data => moment(data),
  }[type]
  types = types ? types(data) : data
  return types
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
  geopoint: ObjectField,
  tag: TagField,
  datetime: DatetimeField,
  object: ObjectField,
  relation: RelationField,
  reference: SelectField,
  array: TagField
}


@withSyncano()
class FormGenerator extends React.Component {
  state = {
    errors: {},
    fields: {},
    changed: {}
  }
  constructor(props) {
    super(props)
  }
  receiveFields = (values) => {
    const { fields } = this.props
    let updateDict = {}
    let changesDict = { ...this.state.changed }
    for (var { name, type } of fields) {
      updateDict[name] = receive({ data: values[name], type })
      changesDict[name] = false
    }
    this.setState({ fields: updateDict, changed: changesDict })
  }
  componentWillMount() {
    const { values } = this.props
    if (values) {
      this.receiveFields(values)
    }
  }
  componentWillReceiveProps(nextProps) {
    const { values, fields } = this.props
    if (nextProps.values && nextProps.values !== values) {
      this.receiveFields(nextProps.values)
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
    let filteredFields = fields.map(({ filter_index, ...props }) => ({ ...props }))
    const fieldsRender = filteredFields.map((f, i) => {
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
        <Submit submitText={submitText} />
      </form>
    )
  }
}
FormGenerator.defaultProps = {
  values: {}
}
export default FormGenerator
