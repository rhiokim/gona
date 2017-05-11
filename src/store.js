import os from 'os'
import path from 'path'
import low from 'lowdb'
import watch from 'node-watch'

import {CHANGE_STORAGE} from './constants/actionTypes'

// @TODO: initialize basic todo data structure at begin of new day

const year = new Date().getFullYear()

const getKey = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  return `${month}/${date}`
}

export const getTodoState = (part = 'tasks', workspace = 'default') => {
  const db = getStorage()
  return db.get(`${part}/${getKey()}.${workspace}`).value()
}

export const getTodoAll = () => {
  const db = getStorage()
  return {
    config: db.get('config').value(),
    workspaces: db.get(`tasks/${getKey()}`).value(),
    links: db.get(`links/${getKey()}`).value()
    // tasks: db.get(`tasks/${getKey()}`).value(),
    // tasks: db.get(`tasks/${getKey()}`).value()
  }
}

export const getTodoItem = (part = 'tasks', id, workspace = 'default') => {
  const db = getStorage()
  return db.get(`${part}/${getKey()}.${workspace}`).find({id: id})
}

export const getLinkItem = id => {
  const db = getStorage()
  return db.get(`links/${getKey()}`).find({id: id})
}

export const loadConfig = () => {
  const db = getStorage()
  return db.get('config').value()
}

export const storageFilePath = () => {
  return path.join(os.homedir(), '.haroo', `${year}.json`)
}

export const getStorage = () => {
  return low(storageFilePath())
}

export const setConfig = (key, value) => {
  const db = getStorage()
  return db.get('config').assign({[key]: value}).write()
}

export const setWatcher = store => {
  watch(storageFilePath(), (e, name) => {
    const todo = getTodoAll()
    store.dispatch({
      type: CHANGE_STORAGE,
      config: todo.config,
      workspaces: todo.workspaces,
      links: todo.links || []
    })
  })
}
