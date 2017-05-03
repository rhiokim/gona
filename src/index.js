import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
import {ipcRenderer, shell} from 'electron'

import {loadState} from './store'
import rootReducer from './reducers'

import App from './container/app'
const persistedState = loadState()
let store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(createLogger({collapsed: true})))
)

store.subscribe(() => {
  console.log(store.getState())
})

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

window.onload = function () {
  ReactDOM.render(<Main />, document.getElementById('app'))
}
// document.addEventListener('click', event => {
//   if (event.target.href) {
//     // Open links in external browser
//     shell.openExternal(event.target.href)
//     event.preventDefault()
//   } else if (event.target.classList.contains('show-devtool-action')) {
//     ipcRenderer.send('show-devtool')
//   } else if (event.target.classList.contains('js-quit-action')) {
//     window.close()
//   }
// })
