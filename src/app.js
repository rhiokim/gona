import {ipcRenderer, shell} from 'electron'

require('./dbconn')

document.addEventListener('click', event => {
  if (event.target.href) {
    // Open links in external browser
    shell.openExternal(event.target.href)
    event.preventDefault()
  } else if (event.target.classList.contains('show-devtool-action')) {
    ipcRenderer.send('show-devtool')
  } else if (event.target.classList.contains('js-quit-action')) {
    window.close()
  }
})
