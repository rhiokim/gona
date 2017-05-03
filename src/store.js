const watch = require('node-watch')
const os = require('os')
const path = require('path')

const year = new Date().getFullYear()
const dbfile = path.join(os.homedir(), '.haroo', `${year}.json`)

const low = require('lowdb')

watch(dbfile, (e, name) => {
  const db = low(dbfile)
})

const getKey = () => {
  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  return `${month}/${date}`
}

const getState = (part = 'tasks') => {
  return `${part}/${getKey()}`
}

export const loadState = () => {
  const db = low(dbfile)
  return db.get(getState()).value()
}
