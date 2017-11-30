import React, {PropTypes} from 'react'
import {Text, Rect, Layer, Group, Circle, Line} from 'react-konva'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from './actions/draw'
import {drawEnd} from './actions/draw'
import * as constants from './constants'
const CustomCircle = ({size, color, dragging = false, ...props}) => (
  <Circle
    x={size}
    y={size}
    radius={size / 2.0}
    stroke={color}
    strokeWidth={1}
    fill={dragging ? color : constants.ENDPOINT_COLOR}
  />
)
const InputDot = ({
  color = constants.TEXT_COLOR,
  size = 5,
  text,
  name,
  ...props
}) => (
  <Group {...props} onMouseUp={() => console.log('MOUSE')}>
    <CustomCircle size={size} color={color} />
    <Text text={text} fill={color} x={15} fontSize={size * 2} />
  </Group>
)
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
class OutputDot extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: constants.TEXT_COLOR
    }
  }
  render () {
    const {
      size = 5,
      text,
      drawLine,
      to,
      drawStart,
      drawMove,
      drawing,
      parentX,
      parentY,
      name,
      ...props
    } = this.props
    const {color, dragging = false, over = false, x = 0, y = 0} = this.state
    return (
      <Group
        x={props.x}
        y={props.y}
        onMouseLeave={e => {
          this.setState({
            color: constants.TEXT_COLOR,
            over: false
          })
        }}
        onMouseOver={e => {
          this.setState({
            color: '#FFF',
            over: true
          })
        }}
        onMouseDown={({evt}) => {
          if (over) {
            drawStart({
              name,
              startX: parentX + props.x + size,
              startY: parentY + props.y + size,
              id: props.id
            })
          }
        }}
      >
        <CustomCircle dragging={dragging} size={size} color={color} />
        <Text
          text={text}
          fill={color}
          x={-constants.WIDTH / 2.0 - 5}
          fontSize={size * 2}
          width={constants.WIDTH / 2.0}
          align={'right'}
        />
      </Group>
    )
  }
}
@connect(
  state => ({
    drawStart: state.drawStart,
    drawMove: state.drawMove,
    drawEnd: state.drawEnd,
    drawing: state.drawing,
    moveEndpoint: state.moveEndpoint,
    drawX: state.drawX,
    drawY: state.drawY
  }),
  {
    ...actions
  }
)
class Endpoint extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  onDrag = (e, ev) => {
    let {x, y} = this.props
    const {drawing, id, moveEndpoint} = this.props
    if (drawing) {
      return {x, y}
    }
    x = e.x
    y = e.y
    moveEndpoint({id, x, y})
    return {
      x,
      y
    }
  }
  onDragStart = ({evt}) => {
    const {drawing, drawMove, id} = this.props
    if (drawing) {
      drawMove({id, x: evt.layerX, y: evt.layerY})
    }
  }
  onDragMove = ({evt}) => {
    const {drawing, drawMove, id} = this.props
    if (drawing) {
      drawMove({id, x: evt.layerX, y: evt.layerY})
    }
  }
  onDragEnd = ({evt}) => {
    const {drawing, drawEnd, id} = this.props
    if (drawing) {
      drawEnd({id, x: evt.layerX, y: evt.layerY})
    }
  }
  render () {
    const {
      inputs = [],
      outputs = [],
      name = 'Endpoint',
      x,
      y,
      ...props
    } = this.props
    let {to, dragging = false} = this.state
    return (
      <Group
        x={x}
        y={y}
        dragBoundFunc={this.onDrag}
        draggable
        onDragStart={this.onDragStart}
        onDragMove={this.onDragMove}
        onDragEnd={this.onDragEnd}
      >
        <Rect
          width={constants.WIDTH}
          height={(Math.max(inputs.length, outputs.length) + 2) * constants.ROW}
          fill={constants.ENDPOINT_COLOR}
          shadowBlur={5}
        />
        <Rect
          width={constants.WIDTH}
          height={constants.SIZE * 5}
          fill={constants.ENDPOINT_COLOR_DARK}
        />
        <Text
          text={name}
          fill={constants.TEXT_COLOR}
          x={0}
          y={constants.SIZE * 1.5}
          width={constants.WIDTH}
          fontSize={constants.SIZE * 2}
          align='center'
        />
        {inputs.map((i, index) => (
          <InputDot
            name={name + i}
            parentX={x}
            parentY={y}
            text={i}
            x={constants.DOT_POSITION.xi}
            y={constants.DOT_POSITION.y(index)}
          />
        ))}
        {outputs.map((i, index) => (
          <OutputDot
            name={name + i}
            parentX={x}
            parentY={y}
            text={i}
            x={constants.DOT_POSITION.xo}
            y={constants.DOT_POSITION.y(index)}
            {...props}
          />
        ))}
      </Group>
    )
  }
}
export default withRouter(Endpoint)
