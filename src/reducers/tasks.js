import {FETCH_TASKS} from '../constants/actionTypes'

const initialState = {
  tasks: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return Object.assign({}, state, {
        tasks: action.tasks || []
      })
    default:
      return state
  }
}
