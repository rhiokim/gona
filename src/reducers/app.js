import {
  SET_ACTIVE_MENU,
  CHANGE_STORAGE,
  FETCH_TODO_ALL,
  FETCH_CONFIG
} from '../constants/actionTypes'

const initialState = {
  activeMenu: 'tasks',
  config: {},
  workspaces: {
    default: []
  },
  links: [],
  tasks: [],
  completedTasks: []
}

const completed = (list, bool = true) => {
  return list.filter(item => item.done === bool)
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
        config: action.config || {},
        workspaces: action.workspaces,
        links: completed(action.links, false),
        completedLinks: completed(action.links, true),
        tasks: completed(action.workspaces.default, false),
        completedTasks: completed(action.workspaces.default, true)
      })
    case FETCH_CONFIG:
      return Object.assign({}, state, {
        config: action.config
      })
    default:
      return state
  }
}
