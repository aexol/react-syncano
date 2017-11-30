import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import * as actions from './actions/draw'
import {withRouter, Switch, Route, Link} from 'react-router-dom'
import {Layer, Rect, Stage, Group, Line} from 'react-konva'
import Endpoint from './Endpoint'
import {conf} from './mock'
import {PreloaderScreen} from '../media/PreloaderScreen'
import * as constants from './constants'
const BezierFromTo = ({from, to}) => (
  <Line
    points={[...from, ...to]}
    stroke={'red'}
    strokeWidth={2}
    lineCap={'round'}
    lineJoin={'round'}
    tension={1}
  />
)

@connect(
  state => ({
    ...state
  }),
  {
    ...actions
  }
)
class Grid extends React.Component {
  componentWillMount () {
    this.props.loadGraphEndpoints(conf)
  }
  render () {
    const {
      drawEnd,
      drawing,
      startX,
      startY,
      drawX,
      drawY,
      graphEndpoints
    } = this.props
    if (!graphEndpoints) {
      return <PreloaderScreen text='Loading graph...' />
    }
    const connections = graphEndpoints.connections.map(c => {
      let [endpointFrom] = graphEndpoints.endpoints.filter(
        e => e.id === c.from.endpoint
      )
      let {x: fx, y: fy} = endpointFrom
      let outputIndex = endpointFrom.outputs.indexOf(c.from.output)
      let [endpointTo] = graphEndpoints.endpoints.filter(
        e => e.id === c.to.endpoint
      )
      let inputIndex = endpointTo.outputs.indexOf(c.to.input)
      let {x: tx, y: ty} = endpointTo
      return {
        from: [fx+constants.DOT_POSITION.xo+constants.SIZE, fy+constants.DOT_POSITION.y(outputIndex)+constants.SIZE],
        to: [tx+constants.DOT_POSITION.xi+constants.SIZE, ty+constants.DOT_POSITION.y(outputIndex)+constants.SIZE]
      }
    })
    return (
      <Stage
        width={window.innerWidth - 200}
        height={window.innerHeight - 70}
        style={{width: '100%', height: '100%'}}
        onContentMouseDown={this.onDragEnd}
      >
        <Layer>
          <Rect
            width={window.innerWidth - 200}
            height={window.innerHeight - 70}
          />
          {graphEndpoints.endpoints.map(c => <Endpoint key={c.id} {...c} />)}
          {connections.map(c => <BezierFromTo {...c} />)}
          {drawing &&
            <BezierFromTo from={[startX, startY]} to={[drawX, drawY]} />}
        </Layer>
      </Stage>
    )
  }
}
export default withRouter(Grid)
