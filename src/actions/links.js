import {getLinkItem} from '../store'

export const doneLink = (id, done = true) => {
  return dispatch => {
    getLinkItem(id)
      .assign({
        done: done,
        completedAt: done ? new Date().getTime() : undefined
      })
      .write()
  }
}
