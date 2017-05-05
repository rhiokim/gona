import {
  SET_ACTIVE_MENU,
  CHANGE_STORAGE,
  FETCH_TASKS
} from '../constants/actionTypes'

const initialState = {
  active: 'todo',
  workspace: {
    default: []
  },
  links: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return Object.assign({}, state, {
        active: action.menu
      })
    case CHANGE_STORAGE:
      return Object.assign({}, state, {
        workspace: action.workspace,
        links: action.links
      })
    case FETCH_TASKS:
      return Object.assign({}, state, {
        workspace: {default: action.tasks}
      })
    default:
      return state
  }
}
