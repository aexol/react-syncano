import React,
{
  PropTypes
}
from 'react'
import Select from 'react-select';
import {
  Creatable
}
from 'react-select';
import 'react-select/dist/react-select.css';
import Geosuggest from 'react-geosuggest';
const validators = {
  normal: {},
  syncano: {
    select: e => Array.isArray(e) ? e.map(p => p.value) : e.value,
    tag: e => Array.isArray(e) ? e.map(p => p.value) : e.value
  },
  django: {
    select: e => Array.isArray(e) ? e.map(p => p.value) : e.value,
    tag: e => Array.isArray(e) ? e.map(p => p.value) : e.value
  }
}
const receivers = {
  normal: {},
  syncano: {
    file: e => e.value
  }
}
const fieldElements = {
  text: ({
    name,
    placeholder,
    inputType
  }, t) => (
    <input className={`formgenInput ${t.state.fields[name] !== t.state.initial[name] ? "changed" : "" }`} key={name} onChange={(e) => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e.target.value
          }
        })
      }} placeholder={placeholder ? placeholder : name} type={inputType ? inputType : "text"} value={t.state.fields[name]}/>
  ),
  textarea: ({
    name,
    placeholder
  }, t) => (
    <textarea className={`formgenInput ${t.state.fields[name] !== t.state.initial[name] ? "changed" : "" }`} key={name} onChange={(e) => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e.target.value
          }
        })
      }} placeholder={placeholder ? placeholder : name} value={t.state.fields[name]}/>
  ),
  select: ({
    name,
    placeholder,
    label,
    value,
    values,
    multi
  }, t) => (
    <Select className={`formgenSelect ${t.state.fields[name] !== t.state.initial[name] ? "changed" : "" }`} key={name} multi={multi ? multi : false} name={placeholder ? placeholder : name} onChange={(e) => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e
          }
        });
      }} options={values.map(k => ({
        value: k[value],
        label: k[label]
      }))} placeholder={placeholder ? placeholder : name} value={t.state.fields[name]}/>
  ),
  file: ({
    name,
    placeholder
  }, t) => (
    <div className="formgenFile" key={name}>
      <input className={`formgenInput ${t.state.fields[name] !== t.state.initial[name] ? "changed" : "" }`} onChange={(e) => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e.target.files[0]
          }
        })
      }} placeholder={placeholder ? placeholder : name} type="file"/>
      <div className='namefile'>{name}</div>
      <a className='file_holder' href={t.state.fields[name] !== t.state.initial[name] ? "" : t.state.initial[name] ? t.state.initial[name] : ""}>{t.state.fields[name] !== t.state.initial[name] ? "" : t.state.initial[name] ? t.state.initial[name] : ""}</a>
    </div>
  ),
  geo: ({
    name,
    placeholder,
    location,
    radius
  }, t) => (
    <Geosuggest className={`formgenGeo ${t.state.fields[name] !== t.state.initial[name] ? "changed" : "" }`} initialValue={t.state.initial[name]} key={name} location={location} name={name} onSuggestSelect={(e) => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e
          }
        })
      }} placeholder={placeholder} radius={radius} value={t.state.fields[name]}/>
  ),
  tag: ({
    name,
    placeholder,
    multi
  }, t) => (
    <Creatable className={`formgenSelect ${t.state.fields[name] !== t.state.initial[name] ? "changed" : "" }`} key={name} multi={multi ? multi : true} name={placeholder ? placeholder : name} onChange={(e) => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e
          }
        });
      }} placeholder={placeholder ? placeholder : name} value={t.state.fields[name]}/>
  )
}
class FormGen extends React.Component {
  constructor(props) {
    super(props);
    const {
      fields
    } = this.props;
    var newFields = {}
    for (var f of fields) {
      newFields[f.name] = ""
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
  componentWillReceiveProps(nextProps) {
    const {
      fields,
      validator,
      values
    } = nextProps;
    var newFields = {}
    for (var f of fields) {
      const receive = validator ? receivers[validator][f.type] ? receivers[validator][f.type] : e => e : e => e;
      newFields[f.name] = values[f.name] ? receive(values[f.name]) : ""
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
  validate() {
    const {
      validator,
      fields
    } = this.props;
    var sfields = {
      ...this.state.fields
    };
    const filteredValidate = Object.keys(sfields).filter(k => sfields[k] !== this.state.initial[k])
    const returnData = filteredValidate.reduce((accumulator, currentValue, currentIndex, array) => {
      accumulator[currentValue] = sfields[currentValue];
      return accumulator
    }, {});
    if (validator) {
      const va = validators[validator]
      for (var f of fields) {
        if (returnData[f.name]) {
          returnData[f.name] = va[f.type] ? va[f.type](returnData[f.name]) : returnData[f.name]
        }
      }
    }
    this.props.validate(returnData);
  }
  render () {
    const {
      fields,
      submitText
    } = this.props;
    const fieldsRender = fields.map(f => fieldElements[f.type]({
      ...f
    }, this));
    return (
      <div className='FormGen'>
        {fieldsRender}
        <div className='Submit' onClick={() => {
          this.validate()
        }}>{submitText ? submitText : "Submit"}</div>
      </div>
    )
  }
}
FormGen.defaultProps = {
  values: {}
}
export
default FormGen