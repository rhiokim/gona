import {SET_ACTIVE_MENU, FETCH_TODO_ALL} from '../constants/actionTypes'
import {getTodoAll} from '../store'

const activeMenu = menu => ({
  type: SET_ACTIVE_MENU,
  menu: menu
})

export const setActiveMenu = menu => {
  return dispatch => {
    dispatch(activeMenu(menu))
  }
}

const loadTodoAll = todo => ({
  type: FETCH_TODO_ALL,
  workspaces: todo.workspaces,
  links: todo.links || []
})

export const fetchTodoAll = () => {
  return dispatch => {
    const todo = getTodoAll()
    dispatch(loadTodoAll(todo))
  }
}
