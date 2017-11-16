import React, {PropTypes} from 'react'
import Select from 'react-select'
import {Creatable} from 'react-select'
import 'react-select/dist/react-select.css'
import Geosuggest from 'react-geosuggest'
import classnames from 'classnames'
import {connect} from 'react-redux'
import { display } from "../../display";
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
    tag: e => (Array.isArray(e) ? e.map(p => p.value) : e.value)
  }
}

const fieldElements = {
  //TODO: datetime input
  text: ({name, placeholder, inputType, className = '', invalid}, t) => (
    <input
      className={classnames({
        forgenInput: true,
        changed: t.state.fields[name] !== t.state.initial[name],
        [className]: true,
        invalid
      })}
      key={name}
      onChange={e => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e.target.value
          }
        })
      }}
      placeholder={placeholder || name}
      type={inputType || 'text'}
      value={t.state.fields[name]}
    />
  ),
  textarea: ({name, placeholder, className = '', invalid}, t) => (
    <textarea
      className={classnames({
        forgenInput: true,
        changed: t.state.fields[name] !== t.state.initial[name],
        [className]: true,
        invalid
      })}
      key={name}
      onChange={e => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e.target.value
          }
        })
      }}
      placeholder={placeholder || name}
      value={t.state.fields[name]}
    />
  ),
  select: (
    {name, placeholder, label="id", value="id", values, multi, className = '', invalid},
    t
  ) => (
    <Select
      className={classnames({
        forgenInput: true,
        changed: t.state.fields[name] !== t.state.initial[name],
        [className]: true,
        invalid
      })}
      key={name}
      multi={multi || false}
      name={placeholder || name}
      onChange={e => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e
          }
        })
      }}
      options={values.map(k => ({
        key: `${name}-${k[value]}`,
        value: k[value],
        label: k[label]
      }))}
      placeholder={placeholder || name}
      value={t.state.fields[name]}
    />
  ),
  file: ({name, placeholder, className = '', invalid}, t) => (
    <div className='formgenFile' key={name}>
      <input
        className={classnames({
          [className]: true,
          forgenInput: true,
          changed: t.state.fields[name] !== t.state.initial[name],
          invalid
        })}
        onChange={e => {
          const fileName = e.target.files[0]
          getBase64(fileName, r => {
            t.setState({
              fields: {
                ...t.state.fields,
                [name]: r
              }
            })
          })
        }}
        placeholder={placeholder || name}
        type='file'
      />
      <a
        className='file_holder'
        href={
          t.state.fields[name] !== t.state.initial[name]
            ? ''
            : t.state.initial[name] ? t.state.initial[name] : ''
        }
      >
        {t.state.fields[name] !== t.state.initial[name]
          ? ''
          : t.state.initial[name] ? t.state.initial[name] : ''}
      </a>
    </div>
  ),
  geo: ({name, placeholder, location, radius, className = '', invalid}, t) => (
    <Geosuggest
      className={classnames({
        forgenInput: true,
        changed: t.state.fields[name] !== t.state.initial[name],
        [className]: true,
        invalid
      })}
      initialValue={t.state.initial[name]}
      key={name}
      location={location}
      name={name}
      onSuggestSelect={e => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e
          }
        })
      }}
      placeholder={placeholder}
      radius={radius}
      value={t.state.fields[name]}
    />
  ),
  tag: ({name, placeholder, multi, className = '', invalid}, t) => (
    <Creatable
      className={classnames({
        forgenInput: true,
        changed: t.state.fields[name] !== t.state.initial[name],
        [className]: true,
        invalid
      })}
      key={name}
      multi={multi || true}
      name={placeholder || name}
      onChange={e => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e
          }
        })
      }}
      placeholder={placeholder || name}
      value={t.state.fields[name]}
    />
  )
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
      newFields[f.name] = values[f.name] || ''
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
    const {validator = 'syncano', fields, isFormData = true} = this.props
    var sfields = {
      ...this.state.fields
    }
    const filteredValidate = Object.keys(sfields).filter(
      k => sfields[k] !== this.state.initial[k]
    )
    const returnData = filteredValidate.reduce(
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
    this.props.validate(returnData)
  }
  render () {
    const {fields, submitText, invalid = []} = this.props
    const fieldsRender = fields.map(f => {
      let Field = {...f}
      if(Field.target){
        if(typeof this.props[Field.target] ==="undefined"){
          return
        }
        Field.values = this.props[Field.target]
        Field.label  = display(Field.target)
      }
      return fieldElements[Field.type](
        {
          ...Field,
          invalid: invalid[Field.name]
        },
        this
      )
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
