import React, {PropTypes} from 'react'
import classnames from 'classnames'
const FileField = ({name, placeholder, className = '', invalid, t}) => (
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
)
export default FileField
