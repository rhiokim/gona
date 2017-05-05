import {FETCH_TASKS} from '../constants/actionTypes'
import {getTodoState, getTodoItem, getStorage} from '../store'

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

export const doneTask = (idx = 0, done = true) => {
  return dispatch => {
    const task = getTodoItem('tasks', idx).assign({done: done})
    task.write()
  }
}
