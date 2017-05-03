const watch = require('node-watch')
const os = require('os')
const path = require('path')

const year = new Date().getFullYear()
const dbfile = path.join(os.homedir(), '.haroo', `${year}.json`)

const low = require('lowdb')

watch(dbfile, (e, name) => {
  const db = low(dbfile)

  console.log(db.get('tasks/5/3').value())
})
