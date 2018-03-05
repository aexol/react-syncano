import React from 'react';
import './Tag.scss';
import classnames from 'classnames';
import { isAndroid } from 'react-device-detect';

class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  documentClickHandler = () => {
    this.setState({
      isOpen: false
    });
  }

  preventEnter = (e, fieldValue) => {
    if (e.keyCode === 13) {
      e.stopPropagation();
      e.preventDefault();
      this.setState({
        isOpen: true,
        inputValue: ''
      })
    }
  }

  componentWillMount() {
    document.addEventListener('click', this.documentClickHandler, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.documentClickHandler, true);
  }

  addValue = () => {
    let { value, onChange, unique = true } = this.props
    const { inputValue } = this.state
    let fieldValue = value || []
    if (inputValue.length && (!fieldValue.find(f => f.value === inputValue) || !unique)) {
      fieldValue = [...fieldValue, { label: inputValue, value: inputValue }]
      this.setState({
        inputValue: ''
      })
      onChange(fieldValue)
    }
  }

  render() {
    let { placeholder, value: fieldValue, onChange } = this.props
    fieldValue = fieldValue || []
    return (
      <div className="Tag">
        <div
          onClick={(e) => {
            this.setState({
              isOpen: !this.state.isOpen
            })
          }}
          className={classnames({
            'holder-select': true,
          })}>
          <div className='holder-value'>
            {fieldValue.map(({ value, label }, index) => (
              <div className='show-value' key={index} onClick={(e) => {
                e.stopPropagation();
                const newValue = fieldValue.filter(i => i.value !== value)
                onChange(newValue)
              }}>
                <span className='value-choosen'>{label}</span>
                <span
                  className='delete'
                >×</span>
              </div>
            ))}
            <input
              ref={input => input}
              type="text"
              onClick={this.addValue}
              onKeyPress={(e) => {
                this.preventEnter(e)
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  e.stopPropagation();
                  e.preventDefault();
                  this.addValue()
                }
              }}
              onKeyUp={(e) => {
                this.preventEnter(e)
              }}
              placeholder={placeholder}
              value={this.state.inputValue}
              onChange={(e) => {
                this.setState({
                  inputValue: e.target.value
                })
              }
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Tag;
