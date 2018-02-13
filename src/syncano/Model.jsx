import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from './actions'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import {Layer, Rect, Stage, Group} from 'react-konva'
import Endpoint from './graph/Endpoint'
import Grid from './graph/Grid'
import { withSyncano } from './decorators';

@withSyncano()
class Model extends React.Component {
  render () {
    return (
      <div className='Model' style={{width:"100%",height:"calc(100% - 70px)",background: '#888'}}>
        <Grid />
      </div>
    )
  }
}
export default withRouter(Model)
