import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon'
import React, {PropTypes} from 'react'
export const Preloader = (props = {}) => (
  <div
    className='Preload'
    style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center'}}
  >
    <PreloaderIcon
      type={ICON_TYPE.OVAL}
      size={32}
      strokeWidth={8} // min: 1, max: 50
      strokeColor='#F0AD4E'
      duration={800}
      {...props}
    />
    {props.text && <div className='PreloaderText' style={{ fontWeight: 100, paddingTop: '20px'}}>{props.text}</div>}
  </div>
)
