import {FETCH_TASKS} from '../constants/actionTypes'
import {getTodoItem} from '../store'

// const loadTasks = tasks => ({
//   type: FETCH_TASKS,
//   tasks: tasks
// })
//
// // export const fetchTasks = () => {
// //   return dispatch => {
// //     const tasks = getTodoState('tasks')
// //     dispatch(loadTasks(tasks))
// //   }
// // }

export const doneTask = (id, done = true) => {
  return dispatch => {
    const task = getTodoItem('tasks', id).assign({done: done})
    // console.log(id, task.value())
    task.write()
  }
}
