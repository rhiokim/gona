import {FETCH_TASKS} from '../constants/actionTypes'
import {getTodoState, getStorage} from '../store'

const loadTasks = tasks => ({
  type: FETCH_TASKS,
  tasks: tasks
})

export const fetchTasks = () => {
  return dispatch => {
    const tasks = getTodoState('tasks')
    dispatch(loadTasks(tasks))
  }
}
