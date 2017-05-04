import {FETCH_TASKS, CHANGE_STORAGE} from '../constants/actionTypes'

const initialState = {
  tasks: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return Object.assign({}, state, {
        tasks: action.tasks || []
      })
    case CHANGE_STORAGE:
      return Object.assign({}, state, {
        tasks: action.tasks || []
      })
    default:
      return state
  }
}
