import React, { PropTypes } from 'react'
class Autosuggest extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  onChange = (e) => {
    const { load, onSelect } = this.props
    const {value} = e.target
    this.setState({value})
    if(value.length > 2){
      load(value)
      onSelect(value)
    }
  }
  componentDidUpdate(prevProps){
      const {
        value = "",
        initial = true
      } = this.state
      const {
        initialValue
      } = this.props
      if( initialValue !== prevProps.initialValue && initial){
        this.setState({
          value:initialValue,
          initial:false
        })
      }
  }
    render () {
        const {
          value = ""
        } = this.state
        const  {
          onSelect,
          list = [],
          name = "autosuggest"
        } = this.props
        return (
            <div className="Autosuggest">
                <input onChange={this.onChange} value={value} type="text" list={name} />
                <datalist id={name}>
                  {list.map( i => <option key={i} value={i} /> )}
                </datalist>
            </div>
        )
    }
}
export default Autosuggest
