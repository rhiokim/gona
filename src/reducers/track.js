import * as actionTypes from '../constants/actionTypes'

const initialState = {
  tracks: [],
  activeTrack: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TRACKS:
      break
    default:
      break
  }
  return state
}
