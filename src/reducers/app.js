import * as actionTypes from '../constants/actionTypes'

const initialState = {
  active: 'todo'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_MENU:
      return Object.assign({}, state, {
        active: action.menu
      })
    default:
      return state
  }
}
