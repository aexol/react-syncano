import React, { PropTypes } from 'react';
import './MultiSelect.scss';
import classnames from 'classnames';

class MultiSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.documentClickHandler, true);
  }

  componentWillUnmount()   {
    document.removeEventListener('click', this.documentClickHandler, true);
  }

  documentClickHandler = () => {
    this.setState({
       isOpen: false
     });
  }
  addValue = ({value,label}) => {
    let { placeholder, options, value:fieldValue, onChange, multi=false } = this.props
    let vals = {value,label}
    if(multi){
      vals = [...fieldValue, vals]
      vals = vals.filter((v,i) => vals.findIndex(vv => vv.value === v.value) === i)
    }
    onChange(vals)
    this.setState({
      isOpen: true
    }) 
  }
  render () {
    let { placeholder, options, value:fieldValue, onChange, multi=false,style={} } = this.props
    fieldValue = fieldValue || []
    if(!Array.isArray(fieldValue)){
      fieldValue = [fieldValue]
    }
    options = options.filter( o => -1 === fieldValue.findIndex(v => o.value === v.value))
    return (
      <div className="MultiSelect" style={style} >
        <div
        onClick={() => {
          this.setState({
            isOpen: !this.state.isOpen
          })
        }}
        className={classnames({
          'holder-select': true,
          change: this.state.isOpen
        })}>
          <div className='holder-value'>
            {fieldValue.length ? fieldValue.map(({value,label}, index) => (
              <div className='show-value' key={index}>
                <span className='value-choosen'>{label}</span>
                <span
                className='delete'
                onClick={(e) => {
                  e.stopPropagation();
                  const newValue = fieldValue.filter(i => i.value !== value)
                  onChange(newValue)
                }}>×</span>
              </div>
            )) : <span className='placeholder-value'>{placeholder}</span>}
          </div>
          <span className="select-arrow"></span>
        </div>
        <ul className={classnames({
          'holder-values': true,
          open: this.state.isOpen
        })}>
          {options.map(({label,value},index) => {
            return (
              <li
              onClick={() => {
                this.addValue({value,label})
              }}
              key={index}
              className='select-value'>{label}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MultiSelect;
