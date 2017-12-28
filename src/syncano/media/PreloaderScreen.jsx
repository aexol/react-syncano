import React, {PropTypes} from 'react'
import {Preloader} from './Preloader'
export const PreloaderScreen = (props = {}) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    className='PreloaderScreen'
  >
    <Preloader {...props} />
  </div>
)
