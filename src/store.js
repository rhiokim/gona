import os from 'os'
import path from 'path'
import low from 'lowdb'
import watch from 'node-watch'
import mkdirp from 'mkdirp'

import {CHANGE_STORAGE} from './constants/actionTypes'

// @TODO: initialize basic todo data structure at begin of new day
// @TODO: need to refactor with cli db.js module

let dir = path.join(os.homedir(), '.haroo')
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
  return db
    .get('config')
    .assign({[key]: value})
    .write()
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

const create = () => {
  let db
  mkdirp.sync(dir)

  db = low(path.join(dir, `${year}.json`))
  db.defaults({
    config: {}
  }).write()

  if (!db.has(`tasks/${getKey()}`).value()) {
    db.set(`tasks/${getKey()}`, {
      default: []
    })
      .set(`links/${getKey()}`, [])
      .write()
  }
}

create()
