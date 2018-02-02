import React, { PropTypes } from 'react'
import classnames from 'classnames'
import TextField from './TextField'
import AutosuggestField from './AutosuggestField'
import { connect } from 'react-redux';
import * as actions from '../../actions/index'

@connect(
  state => ({
    suggestList: state.suggestList,
  }), {
    syncanoGeosuggest: actions.syncanoGeosuggest
  }
)
export default class GeoField extends React.Component {
  render() {
    const {
      name,
      placeholder,
      syncanoGeosuggest,
      suggestList,
      className = '',
      params = {},
      Component = AutosuggestField,
      t,
      ...props
    } = this.props
    return (
      <Component
        {...props}
        name={name}
        placeholder={placeholder}
        className={className}
        list={suggestList}
        t={t}
        load={(e) => {
          syncanoGeosuggest({
            keyword: e,
            params
          })
        }}
      />
    )
  }
}
