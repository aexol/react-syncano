import React, { PropTypes } from 'react'
import classnames from 'classnames'
import './Autosuggest.scss'

class Autosuggest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDatalist: false,
      setValue: ''
    }
  }
  componentWillMount() {
    const { fieldValue='' } = this.props
    this.setState({
      setValue: fieldValue
    })
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.fieldValue && this.state.value === ''){
      this.setState({
        setValue: nextProps.fieldValue
      })
    }
  }
  onChange = (e) => {
    const { load, onSelect } = this.props
    const newValue = e.target.value;
    this.setState({ setValue: newValue, showDatalist: true })
    if (newValue.length > 2) {
      load(newValue)
      onSelect(newValue)
    }
  }
  render() {
    const {
      onSelect,
      list = [],
      name = "autosuggest",
      placeholder,
      initialValue,
      load,
      ...props
    } = this.props
    return (
      <div className='autosuggest'>
        <div className="Autosuggest">
          <input {...props} onChange={this.onChange} value={this.state.setValue} type="text" list={name} placeholder={placeholder || name} />
          {list &&
            <div className={classnames({
              'datalist-suggest': true,
              'show-datalist': this.state.showDatalist
            })}>
              {list.map((i, index) => (
                <div
                className='option-suggest'
                key={index}
                onClick={() => {
                  this.setState({
                    setValue: i,
                    showDatalist: false
                  })
                  onSelect(i)
                }}>{i}</div>
              ))}
            </div>
          }
        </div>
      </div>
    )
  }
}
export default Autosuggest
