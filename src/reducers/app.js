import {
  SET_ACTIVE_MENU,
  CHANGE_STORAGE,
  FETCH_TODO_ALL
} from '../constants/actionTypes'

const initialState = {
  activeMenu: 'tasks',
  workspaces: {
    default: []
  },
  links: []
}

const completedTask = tasks => {
  return tasks.filter(task => task.done === true)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return Object.assign({}, state, {
        activeMenu: action.menu
      })
    case FETCH_TODO_ALL:
    case CHANGE_STORAGE:
      return Object.assign({}, state, {
        workspaces: action.workspaces,
        links: action.links,
        completedTasks: completedTask(action.workspaces.default)
      })
    default:
      return state
  }
}
