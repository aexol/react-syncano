import * as constants from '../constants'
export const drawStart = ({name, startX, startY, id}) => state => (
  dispatch,
  getState
) => {
  dispatch(state => ({
    ...state,
    drawing: name,
    startX,
    startY,
    drawX: startX,
    drawY: startY
  }))
}
export const drawMove = ({x, y, id}) => state => (dispatch, getState) => {
  dispatch(state => ({
    ...state,
    drawX: x,
    drawY: y
  }))
}
export const drawEnd = ({x,y, id}) => state => (dispatch, getState) => {
  let endpoints = state.graphEndpoints.endpoints.filter( e=> e.id !== id )
  //TODO: filter already connected inputs
  console.log("DRAWEND",x,y)
  let hitAreas = endpoints.map( e=> ({
    id:e.id,
    fx:e.x,
    fy:e.y + constants.DOT_POSITION.y(0) - constants.ROW/2.0,
    tx:e.x + constants.WIDTH/2.0,
    ty:e.y + constants.DOT_POSITION.y(e.inputs.length)+ constants.ROW/2.0
  }))
  //TODO: find hitareas for separate input
  hitAreas.forEach( area => {
    if(x>area.fx && x<area.tx && y>area.fy && y<area.ty){
      console.log(`Draw in area of endpoint ${area.id}`)
    }
  })
  dispatch(state => ({...state, drawing: false}))
}
export const loadGraphEndpoints = conf => state => (dispatch, getState) => {
  dispatch(state => ({...state, graphEndpoints: conf}))
}
export const moveEndpoint = ({id, x, y}) => state => (dispatch, getState) => {
  dispatch(state => ({
    ...state,
    graphEndpoints: {
      ...state.graphEndpoints,
      endpoints: state.graphEndpoints.endpoints.map(
        endp =>
          (endp.id === id
            ? {
              ...endp,
              x,
              y
            }
            : endp)
      )
    }
  }))
}
