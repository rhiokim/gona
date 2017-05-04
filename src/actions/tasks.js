import * as actionTypes from '../constants/actionTypes'
import {getTodoState, getStorage} from '../store'

export const loadTasks = () => ({
  type: actionTypes.LOAD_TASKS
})

export const getTasks = () => {
  return dispatch => {
    const tasks = getTodoState('tasks')
    dispatch(loadTasks())
    console.log(tasks)
  }
}
